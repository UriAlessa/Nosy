import styles from '../styles/accounts.module.css'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PlayButton } from '../components/Buttons'
import Loader from '../components/Loader'
import toast from 'react-hot-toast'
import { connect } from 'react-redux'

const AccountSection = (props) => {
  const [login, setLogin] = useState(false);
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 2000);
  }, [])

  useEffect(() => {
    props.history.push("/accounts");
  }, []);

  return (
    <div className={styles.mainContainer}>
      {loader && <Loader />}
      <div className={styles.midContainer}>
        {!login ? (
          <>
            <Login />
            <div className={styles.welcomeLogin}>
              <h2>Hello! New here?</h2>
              <p>Define your personal details and start journey with us</p>
              <button
                onClick={() => setLogin(true)}
                className={styles.playButton}
              >
                <svg
                  className={styles.buttonPlayButton}
                  xmlns="http://www.w3.org/1999/xlink"
                  viewBox="0 0 163.861 163.861"
                >
                  <path d="M34.857,3.613C20.084-4.861,8.107,2.081,8.107,19.106v125.637c0,17.042,11.977,23.975,26.75,15.509L144.67,97.275   c14.778-8.477,14.778-22.211,0-30.686L34.857,3.613z" />
                </svg>
                <strong>Create account!</strong>
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
              <button
                onClick={() => setLogin(false)}
                className={styles.playButton}
              >
                <svg
                  className={styles.buttonPlayButton}
                  xmlns="http://www.w3.org/1999/xlink"
                  viewBox="0 0 163.861 163.861"
                >
                  <path d="M34.857,3.613C20.084-4.861,8.107,2.081,8.107,19.106v125.637c0,17.042,11.977,23.975,26.75,15.509L144.67,97.275   c14.778-8.477,14.778-22.211,0-30.686L34.857,3.613z" />
                </svg>
                <strong>Go to log in now!</strong>
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

const mapStateToProps = (state) => {
  return {
    token: state.users.token,
  };
};

export default connect(mapStateToProps)(AccountSection)
