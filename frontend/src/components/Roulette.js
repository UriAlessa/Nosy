import styles from "../styles/game/roulette.module.css";
import style from "../styles/game/questionCard.module.css";
import { connect } from "react-redux";

const Roulette = (props) => {
  const user_avatar = "/assets/avatars.png"
  const shadows = [
    { no: "shadow4.png", yes: "music.png", key: "Music" },
    { no: "shadow5.png", yes: "computer.png", key: "Science: Computers" },
    { no: "shadow3.png", yes: "cultura.png", key: "General Knowledge" },
    { no: "shadow1.png", yes: "animals.png", key: "Animals" },
    { no: "shadow2.png", yes: "movies.png", key: "Movies and series" },
  ];
  let resultToRender = <div className={styles.shadows} ></div>
  if (props.game) {
    resultToRender = props.game.current_player
      ? <div className={styles.containerMultiplayer}>
        <div className={styles.shadowsMultiplayer}>

          <div className={styles.userAvatar}
            style={{ backgroundImage: `url(${user_avatar})` }}
          ></div>
          <img className={styles.userAvatar} src={user_avatar} alt="User Avatar" />
          {props.game &&
            shadows.map((shadow) => (
              <img
                key={shadow.key}
                className={style.picShadow}
                src={`assets/${props.game.player.medals.includes(shadow.key)
                  ? shadow.yes
                  : shadow.no
                  }`}
                alt={shadow.key}
              />
            ))}
        </div>
        <div className={styles.shadowsMultiplayer}>
          <img src={user_avatar} alt="User Avatar" />
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
      : <div className={styles.shadows}>
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

    {/* <div className={styles.shadows}>
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
</div> */}
  }

  return (
    <div className={styles.rouletteContainer}>
      <div className={styles.topInfo}>
        <div className={style.containerInfoGame}>
          <img
            className={style.imgInfoGame}
            src="/assets/coin.png"
            alt="coin"
          />
          <span>{props.coins && props.coinsFront}</span>
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
          src="/assets/spin3.png"
          alt="spins"
          className={styles.buttonRoulette}
          onClick={() => {
            !props.playing && props.rotate();
          }}
        />
      </div>
      {
        resultToRender
      }

      {/* <div className={styles.shadows}>
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
      </div> */}
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
