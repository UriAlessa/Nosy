import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { PlayButton } from "../components/Buttons";
import style from "../styles/home/heroHome.module.css";

const HeroHome = (props) => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>PLAYING IS MORE FUN IF YOU AREN'T ALONE!</h1>
      <p className={style.pDescription}>
        The well-known wonder game comes to your hands! so that you entertain
        moments, awaken your mind and learn by playing.
      </p>
      <div className={style.buttons}>
        <Link to="/selectgame">
          <PlayButton text="PLAY NOW" token={props.token} />
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.users.token
  }
}

export default connect(mapStateToProps)(HeroHome);
