import React from "react";
import styles from "../styles/accounts.module.css";
import { useState } from "react";
import { connect } from "react-redux";
import usersActions from "../redux/actions/usersActions";
import GoogleLogin from "react-google-login";
import toast from "react-hot-toast";

const SignUp = (props) => {
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    email: "",
    avatar: "",
  });

  const inputHandler = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const welcomeToast = () => {
    toast.success("Welcome!", {
      style: {
        borderRadius: "10px",
        background: "#453ab7",
        color: "#fff",
        fontFamily: "Ubuntu, sans-serif",
      },
    });
  };

  const submitButton = async () => {
    const { username, password, email, avatar } = newUser;
    if (username === "" || password === "" || email === "" || avatar === "") {
      return toast.error("There can be no empty fields", {
        position: "top-right",
        style: {
          borderRadius: "10px",
          background: "#453ab7",
          color: "#fff",
          fontFamily: "Ubuntu, sans-serif",
        },
      });
    }
    let response = await props.signUpUser(newUser);
    if (!response.data.success) {
      response.data.error.forEach((error) => {
        toast.error(error.message, {
          position: "top-right",
          style: {
            borderRadius: "10px",
            background: "#453ab7",
            color: "#fff",
            fontFamily: "Ubuntu, sans-serif",
          },
        });
      });
    } else {
      await props.sendMail(newUser)
      welcomeToast();
    }
  };

  const responseGoogle = async (response) => {
    let newUser = {
      username: response.profileObj.email.split("@")[0],
      password: response.profileObj.googleId,
      email: response.profileObj.email,
      avatar: response.profileObj.imageUrl,
      google: true,
    };
    let res = await props.signUpUser(newUser);
    if (res.data.success) {
      await props.sendMail(newUser)
      welcomeToast();
    } else {
      toast.error(res.data.error[0].message, {
        position: "top-right",
        style: {
          borderRadius: "10px",
          background: "#453ab7",
          color: "#fff",
          fontFamily: "Ubuntu, sans-serif",
        },
      });
    }
  };

  return (
    <div className={styles.signup}>
      <h1>Create Account</h1>
      <div className={styles.socialMediaLogin}>
        <GoogleLogin
          clientId="1051031328805-p3ct45qtnohrsnsq8vu32eu3o648c3j9.apps.googleusercontent.com"
          buttonText="Sign up"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
      <p>or use your email for registration</p>
      <div className={styles.inputContainer}>
        <input
          className={styles.inputForm}
          onChange={inputHandler}
          name="username"
          type="text"
          placeholder="Choose your username"
        />
        <input
          className={styles.inputForm}
          onChange={inputHandler}
          name="password"
          type="password"
          placeholder="Password"
        />
        <input
          className={styles.inputForm}
          onChange={inputHandler}
          name="email"
          type="email"
          placeholder="Email"
        />
        <input
          className={styles.inputForm}
          onChange={inputHandler}
          name="avatar"
          type="text"
          placeholder="URL avatar"
        />
      </div>
      <button onClick={submitButton} className={styles.playButton}>
        <svg
          className={styles.buttonPlayButton}
          xmlns="http://www.w3.org/1999/xlink"
          viewBox="0 0 163.861 163.861"
        >
          <path d="M34.857,3.613C20.084-4.861,8.107,2.081,8.107,19.106v125.637c0,17.042,11.977,23.975,26.75,15.509L144.67,97.275   c14.778-8.477,14.778-22.211,0-30.686L34.857,3.613z" />
        </svg>
        <strong>SIGN UP</strong>
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  signUpUser: usersActions.signUpUser,
  sendMail: usersActions.sendMail
};

export default connect(null, mapDispatchToProps)(SignUp);
