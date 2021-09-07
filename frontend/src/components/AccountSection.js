import styles from "../styles/accounts.module.css";
import Login from "./Login";
import SignUp from "./SignUp";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PlayButton } from "./Buttons";

const AccountSection = () => {
  const [login, setLogin] = useState(false);

  const toSignUp = () => {
    setLogin(true);
  };

  const toLogin = () => {
    setLogin(false);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.midContainer}>
        {!login ? (
          <>
            <Login />
            <div className={styles.welcomeLogin}>
              <h2>Hello! New here?</h2>
              <p>Define your personal details and start journey with us</p>
              <button onClick={toSignUp} className={styles.playButton}>
                <svg
                  className={styles.buttonPlayButton}
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns="http://www.w3.org/1999/xlink"
                  viewBox="0 0 163.861 163.861"
                >
                  <path d="M34.857,3.613C20.084-4.861,8.107,2.081,8.107,19.106v125.637c0,17.042,11.977,23.975,26.75,15.509L144.67,97.275   c14.778-8.477,14.778-22.211,0-30.686L34.857,3.613z" />
                </svg>
                <strong>Sign Up</strong>
              </button>
            </div>
          </>
        ) : (
          <>
            <div className={styles.welcomeSignup}>
              <h2>You're back? Log in!</h2>
              <p>
                To keep connected with us please login with your account info
              </p>
              <button onClick={toLogin} className={styles.playButton}>
                <svg
                  className={styles.buttonPlayButton}
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns="http://www.w3.org/1999/xlink"
                  viewBox="0 0 163.861 163.861"
                >
                  <path d="M34.857,3.613C20.084-4.861,8.107,2.081,8.107,19.106v125.637c0,17.042,11.977,23.975,26.75,15.509L144.67,97.275   c14.778-8.477,14.778-22.211,0-30.686L34.857,3.613z" />
                </svg>
                <strong>Log In</strong>
              </button>
            </div>
            <SignUp />
          </>
        )}
      </div>
      <Link to="/">
        <PlayButton text="BACK TO HOME" />
      </Link>
    </div>
  );
};

export default AccountSection;
