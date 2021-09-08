import styles from "../styles/roulette.module.css";

const Roulette = (props) => {
  return (
    <div className={styles.rouletteContainer}>
      <img
        ref={props.roulette}
        onClick={() => {
          !props.playing && props.rotate();
        }}
        alt="roulette"
        className={styles.roulette}
        src="/assets/ruleta1.png"
      />
    </div>
  );
};
export default Roulette;
