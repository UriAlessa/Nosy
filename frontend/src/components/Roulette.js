import styles from "../styles/game/roulette.module.css";
import style from "../styles/game/questionCard.module.css";
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
        <div className={style.containerInfoGame}>
          <img className={style.imgInfoGame} src="/assets/coin.png" alt="coin" />
          <span>{props.coins && props.coins}</span>
        </div>
        <div className={style.containerInfoGame}>
          <img
            className={style.imgInfoGame}
            src="/assets/heart_2.png"
            alt="heart"
          />
          <span>{props.game && props.game.lifes}</span>
        </div>
      </div>
      <div className={styles.containerRoulette}>
        <img
          src="/assets/ruleta1.svg"
          ref={props.roulette}
          className={styles.roulette}
          alt="rouletteeee"
        />
        <img
          src="/assets/spin1.png"
          alt="spins"
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
              src={`assets/${props.game.player.medals.includes(shadow.key)
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
