import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import styles from "../styles/header.module.css";
import usersActions from "../redux/actions/usersActions";

const Header = (props) => {
  return (
    <header>
      <div
        className={styles.logo}
        style={{
          backgroundImage: 'url("https://stopots.com/assets/logo1.svg")',
        }}
      ></div>
      <div className={styles.content}>
        <nav>
          <a href="#howToPlay">HOW TO PLAY</a>
          <a href="#nextGames">NEXT GAMES</a>
          <a href="#reviews">REVIEWS</a>
          {props.token && (
            <p style={{ cursor: "pointer" }} onClick={() => props.logOutUser()}>
              LOGOUT
            </p>
          )}
          {!props.token ? (
            <NavLink to="/accounts">LOG IN/SIGN UP</NavLink>
          ) : (
            <>
              <p>HI, {props.username}</p>
              <div
                className="userLogo"
                style={{
                  backgroundImage: `url('${props.avatar}')`,
                  height: "60px",
                  width: "60px",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                }}
              ></div>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.users.token,
    username: state.users.username,
    avatar: state.users.avatar,
  };
};

const mapDispatchToProps = {
  logOutUser: usersActions.logOutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
