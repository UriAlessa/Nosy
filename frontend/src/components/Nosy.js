import styles from "../styles/game/game.module.css";

const Nosy = (props) => {
  const { categoryHandler } = props;
  console.log(props);
  return (
    <div className={styles.nosyContainer}>
      <div className={styles.title}>
        <h1>CHOOSE A CATEGORY</h1>
        <p>If you answer correctly you'll win a character</p>
      </div>
      <div className={styles.containerButtons}>
        {props.game && !props.game.player.medals.includes("Music") && (
          <div className={styles.musicContainer}>
            <img src="/assets/music.png" alt="" />
            <button
              onClick={categoryHandler}
              className={`${styles.buttonOption} ${styles.music}`}
            >
              Music
            </button>
          </div>
        )}
        {props.game && !props.game.player.medals.includes("Animals") && (
          <div className={styles.musicContainer}>
            <img src="/assets/animals.png" alt="" />
            <button
              onClick={categoryHandler}
              className={`${styles.buttonOption} ${styles.animals}`}
            >
              Animals
            </button>
          </div>
        )}
        {props.game && !props.game.player.medals.includes("Movies and series") && (
          <div>
            <img src="/assets/movies.png" alt="" />
            <button
              onClick={categoryHandler}
              className={`${styles.buttonOption} ${styles.movies}`}
            >
              Movies and series
            </button>
          </div>
        )}
        {props.game &&
          !props.game.player.medals.includes("Science: Computers") && (
            <div>
              <img src="/assets/computer.png" alt="" />
              <button
                onClick={categoryHandler}
                className={`${styles.buttonOption} ${styles.computers}`}
              >
                Science Computer
              </button>
            </div>
          )}
        {props.game && !props.game.player.medals.includes("General Knowledge") && (
          <div>
            <img src="/assets/cultura.png" alt="" />
            <button
              onClick={categoryHandler}
              className={`${styles.buttonOption} ${styles.knowledge}`}
            >
              General Knowledge
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nosy;
