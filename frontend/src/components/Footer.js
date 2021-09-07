import styles from "../styles/footer.module.css";
import { Link } from "react-router-dom";
// import { SocialMediaFooterButton } from '../components/Buttons'

// Queda pendiente por parte del equipo de diseño; iconos de redes sociales debajo del Nav.

const Footer = () => {
  return (
    <footer>
      <div className={styles.content}>
        <div
          className={styles.footerLogo}
          style={{
            backgroundImage: `url('https://stopots.com/assets/logo2.svg')`,
            height: "100px",
            width: "100px",
          }}
        ></div>
        <div className={styles.navContainer}>
          <nav className={styles.footerNav}>
            <Link to="/terms">
              <p>TERMS OF SERVICE</p>
            </Link>
            <Link to="/privacy">
              <p>PRIVACY</p>
            </Link>
            <Link to="/">
              <p>ASSETS</p>
            </Link>
          </nav>
          {/* <div style={{display: "flex", justifyContent: "space-between"}}>
                        <SocialMediaFooterButton icon="instagram"/>
                        <SocialMediaFooterButton icon="youtube"/>
                        <SocialMediaFooterButton icon="discord"/>
                        <SocialMediaFooterButton icon="twitter"/>
                    </div> */}
        </div>
        <img
          src="https://stopots.com/images/hotsite/onrizon.svg"
          alt="onrizon"
        />
      </div>
    </footer>
  );
};

export default Footer;
