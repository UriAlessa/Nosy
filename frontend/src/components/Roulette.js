import styles from "../styles/roulette.module.css";
import culo from "../styles/questionCard.module.css";
import { connect } from "react-redux";

const Roulette = (props) => {
  const shadows = [
    { no: "shadow4.png", yes: "music.png", key: "Music" },
    { no: "shadow1.png", yes: "computer.png", key: "Science: Computers" },
    { no: "shadow3.png", yes: "cultura.png", key: "General Knowledge" },
    { no: "shadow5.png", yes: "animals.png", key: "Animals" },
    { no: "shadow2.png", yes: "movies.png", key: "Movies and series" },
  ];
  return (
    <div className={styles.rouletteContainer}>
      <div className={styles.topInfo}>
        <div className={culo.containerInfoGame}>
          <img className={culo.imgInfoGame} src="/assets/coin.png" alt="coin" />
          <span>{props.coins ? props.coins : 5}</span>
        </div>
        <div className={culo.containerInfoGame}>
          <img
            className={culo.imgInfoGame}
            src="/assets/heart_2.png"
            alt="heart"
          />
          <span>{props.game ? props.game.lifes : 5}</span>
        </div>
      </div>{" "}
      <div className={styles.containerRoulette}>
        <img
          src="/assets/ruleta2.png"
          ref={props.roulette}
          className={styles.roulette}
          alt="roulette"
        />
        {/* <div style={{ backgroundImage: "url('/assets/ruleta2.png')" }} ref={props.roulette} className={styles.roulette}>
        </div> */}
        <img
          src="/assets/spin.png"
          alt="spin"
          className={styles.buttonRoulette}
          onClick={() => {
            !props.playing && props.rotate();
          }}
        />
      </div>
      <div className={styles.shadows}>
        {props.game &&
          shadows.map((shadow) => (
            <img
              key={shadow.key}
              className={styles.picShadow}
              src={`assets/${
                props.game.player.medals.includes(shadow.key)
                  ? shadow.yes
                  : shadow.no
              }`}
              alt={shadow.key}
            />
          ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    game: state.game.game,
    coins: state.game.coins,
    user: state.users.user,
  };
};

export default connect(mapStateToProps)(Roulette);

// <div className={styles.rouletteContainer}>
//   <div className={styles.topInfo}>
{
  /* <div className={styles.shadows}>
          {shadows.map((shadow, index) => (
            <img
              key={index}
              className={styles.picShadow}
              src={`assets/${shadow}`}
              alt={shadow}
            />
          ))}
        </div>
        <div className={culo.containerInfoGame}>
          <img className={culo.imgInfoGame} src="/assets/coin.png" />
          <span>{props.coins ? props.coins : 5}</span>
        </div>
        <div className={culo.containerInfoGame}>
          <img className={culo.imgInfoGame} src="/assets/heart_2.png" />
          <span>{props.game ? props.game.lifes : 5}</span>
        </div>
      </div>
      <div className={styles.containerRoulette}>
        <div
          style={{ backgroundImage: "url('/assets/ruleta2.png')" }}
          ref={props.roulette}
          className={styles.roulette}
        ></div>
        <img
          src="/assets/spin.png"
          alt="spin"
          className={styles.buttonRoulette}
          onClick={() => {
            !props.playing && props.rotate();
          }}
        /> */
}
