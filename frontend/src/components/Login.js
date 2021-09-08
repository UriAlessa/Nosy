import { useState } from "react";
import styles from "../styles/accounts.module.css";
import usersActions from "../redux/actions/usersActions";
import { connect } from "react-redux";
import GoogleLogin from "react-google-login";

const Login = (props) => {
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
  });

  const inputHandler = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const submitButton = async () => {
    const { username, password } = newUser;
    if (username === "" || password === "") {
      return alert("Empty fields");
    }
    let response = await props.logInUser(newUser);
    if (response.data.success) {
      alert("Welcome Back!");
    }
  };

  const responseGoogle = async (response) => {
    let loginUser = {
      username:
        response.profileObj.givenName + " " + response.profileObj.familyName,
      password: response.profileObj.googleId,
      google: true,
    };
    let res = await props.logInUser(loginUser);
    if (res.data.success) {
      alert("Welcome!");
    }
    if (!res.data.success) {
      console.log(res.data.error);
    }
  };

  return (
    <div className={styles.login}>
      <h1>Log In</h1>
      <div className={styles.inputContainer}>
        <input
          className={styles.inputForm}
          onChange={inputHandler}
          name="username"
          type="text"
          placeholder="Username"
        />
        <input
          className={styles.inputForm}
          onChange={inputHandler}
          name="password"
          type="password"
          placeholder="Password"
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
        <strong>LOG IN</strong>
      </button>
      <p>Or</p>
      <div className={styles.socialMediaLogin}>
        <GoogleLogin
          clientId="1051031328805-p3ct45qtnohrsnsq8vu32eu3o648c3j9.apps.googleusercontent.com"
          buttonText="Log in"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  logInUser: usersActions.logInUser,
};

export default connect(null, mapDispatchToProps)(Login);
