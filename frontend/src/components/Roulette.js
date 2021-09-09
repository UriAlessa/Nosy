import styles from "../styles/roulette.module.css";

const Roulette = (props) => {
  const shadows = ["shadow1.png", "shadow2.png", "shadow3.png", "shadow4.png", "shadow5.png"]
  return (
    <div className={styles.rouletteContainer}>
      <div className={styles.shadows} style={{ visibility: 'hidden' }}>
        <img className={styles.avatar} src='/assets/music.png' />
        {shadows.map((shadow, index) => <img key={index} className={styles.picShadow} src={`assets/${shadow}`} alt={shadow} />)}
      </div>
      <div className={styles.containerRoulette}>
        <img src='/assets/ruleta2.png' ref={props.roulette} className={styles.roulette} />
        {/* <div style={{ backgroundImage: "url('/assets/ruleta2.png')" }} ref={props.roulette} className={styles.roulette}>
        </div> */}
        <img src="/assets/spin.png" alt="spin" className={styles.buttonRoulette} onClick={() => { !props.playing && props.rotate() }} />
      </div>
      <div className={styles.shadows}>
        {shadows.map((shadow, index) => <img key={index} className={styles.picShadow} src={`assets/${shadow}`} alt={shadow} />)}
        <img className={styles.avatar} src='/assets/music.png' />
      </div>
    </div>
  );
};
export default Roulette;
