import styles from "../styles/roulette.module.css";
import culo from "../styles/questionCard.module.css";
import { connect } from "react-redux";

const Roulette = (props) => {
  const shadows = [
    "shadow1.png",
    "shadow2.png",
    "shadow3.png",
    "shadow4.png",
    "shadow5.png",
  ];
  return (
    <div className={styles.rouletteContainer}>
      <div className={styles.topInfo}>
        <div className={styles.shadows}>
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
        />
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
