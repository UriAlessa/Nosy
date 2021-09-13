import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { useState } from "react";
import styles from "../styles/other/header.module.css";
import usersActions from "../redux/actions/usersActions";
import otherActions from "../redux/actions/otherActions";

const Header = (props) => {
  const showMenu = () => {
    if (props.menu) {
      props.showMenuResponsive(false);
    } else {
      props.showMenuResponsive(true);
    }
  };

  const [login, setLogin] = useState(false);
  const showLogin = () => {
    if (login) {
      setLogin(false);
    } else {
      setLogin(true);
    }
  };

  return (
    <header>
      <div
        className={styles.logo}
        style={{ backgroundImage: 'url("/assets/LogoRuleta.png")' }}
      ></div>
      <div className={styles.content}>
        <nav>
          {document.title !== "Nosy" && (
            <NavLink to="/">
              <p>HOME</p>
            </NavLink>
          )}
          {document.title === "Nosy" && (
            <>
              <a href="#howToPlay">HOW TO PLAY</a>
              <a href="#reviews">REVIEWS</a>
              <a href="#nextGames">NEXT GAMES</a>
            </>
          )}
          {!props.token ? (
            <NavLink to="/accounts">LOG IN/SIGN UP</NavLink>
          ) : (
            <>
              <div
                onClick={showLogin}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <div
                    className={styles.logoUser}
                    style={{
                      backgroundImage: `url('${props.avatar}')`,
                      height: "50px",
                      width: "50px",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      borderRadius: "50%",
                    }}
                  ></div>
                  <span style={{ fontSize: "1.2rem" }}>
                    Hello, {props.username}
                  </span>
                  <svg
                    className={styles.arrowDown}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                  </svg>
                </div>
                {props.token && login && (
                  <div
                    className={styles.logoutContainer}
                    onMouseLeave={showLogin}
                  >
                    {props.userData.admin.flag &&
                      <NavLink className={styles.navlinkFriends} to="/admin">
                        ADMIN
                      </NavLink>}
                    <NavLink className={styles.navlinkFriends} to="/friends">
                      FRIENDS!
                    </NavLink>
                    <p
                      className={styles.logOutP}
                      onClick={() => props.logOutUser()}
                    >
                      LOG OUT
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        </nav>
      </div>
      <svg
        className={styles.hiddenNavIcon}
        onClick={showMenu}
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.users.token,
    username: state.users.username,
    avatar: state.users.avatar,
    menu: state.other.menu,
    userData: state.users.userData
  };
};

const mapDispatchToProps = {
  logOutUser: usersActions.logOutUser,
  showMenuResponsive: otherActions.showMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
