import HeroHome from "../components/HeroHome";
import Header from "../components/Header";
import Rules from "../components/Rules";
import GamesCards from "../components/GamesCards";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/home/heroHome.module.css";
import { connect } from "react-redux";
import VideosHome from "../components/VideosHome";

const Home = (props) => {
  document.title = "Nosy";
  useEffect(() => {
    window.scroll(0, 0);
    props.history.push("/");
    // eslint-disable-next-line
  }, []);
  return (
    <div
      className="body"
      style={{ backgroundImage: 'url("/assets/transparentSmall.png")' }}
    >
      {props.game && props.game.status && (
        <Link to="/game">
          <img
            src="/assets/goback.png"
            className={styles.goGame}
            alt="gogame"
          />
        </Link>
      )}
      <div className="heroHome">
        <Header />
        <HeroHome />
      </div>
      <VideosHome />
      <Rules />
      <Reviews />
      <GamesCards />
      <Footer />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    game: state.game.game,
  };
};

export default connect(mapStateToProps)(Home);
