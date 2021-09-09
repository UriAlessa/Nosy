import styles from "../styles/notFound.module.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div
        className={styles.gif}
        style={{ backgroundImage: "url('/assets/error-Page.gif')" }}>
        <div className={styles.containerTitleAndSubtitle}>
          <h1 className={styles.title}>404</h1>
          <h2 className={styles.subtitle}>ups! page not found</h2>
        </div>
      </div>
      <Link to="/" ><button className={styles.button}>Go Home!</button></Link>
    </div>
  );
};
export default NotFound;
