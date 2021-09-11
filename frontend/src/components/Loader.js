import styles from "../styles/loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader} style={{backgroundImage: "url('/assets/gifGame.gif')"}}>
      <h1>
        <span className={styles.let1}>l</span>
        <span className={styles.let2}>o</span>
        <span className={styles.let3}>a</span>
        <span className={styles.let4}>d</span>
        <span className={styles.let5}>i</span>
        <span className={styles.let6}>n</span>
        <span className={styles.let7}>g</span>
        <span className={styles.let8}>.</span>
        <span className={styles.let9}>.</span>
        <span className={styles.let10}>.</span>
      </h1>
    </div>
  );
};
export default Loader;
