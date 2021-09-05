import styles from "../styles/notFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div
        className={styles.gif}
        style={{ backgroundImage: "url('/assets/error-Page.gif')" }}>
        <div>
          <h1 className={styles.title}>404</h1>
          <h2 className={styles.subtitle}>ups! page not found</h2>
        </div>
      </div>
      <button className={styles.button}>Go Home!</button>
    </div>
  );
};
export default NotFound;
