import styles from "../styles/other/footer.module.css";
import { Link } from "react-router-dom";
import { SocialMediaFooterButton } from "../components/Buttons";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className={styles.content}>
        <div className={styles.footerLogo} style={{backgroundImage: `url('/assets/LogoFooter.png')`}}></div>
        <div className={styles.navContainer}>
          <nav className={styles.footerNav}>
            <Link to="/terms">
              <p>TERMS</p>
            </Link>
            <Link to="/privacy">
              <p>PRIVACY</p>
            </Link>
            {document.title != "Nosy" && (
              <NavLink to="/">
                <p>HOME</p>
              </NavLink>
          )}
          </nav>
          <div className={styles.socialMedia}>
            <SocialMediaFooterButton icon="instagram" />
            <SocialMediaFooterButton icon="youtube" />
            <SocialMediaFooterButton icon="discord" />
            <SocialMediaFooterButton icon="twitter" />
          </div>
        </div>
        <img className={styles.footerMindHubLogo} src='https://i.imgur.com/2qc4IrS.png' />
      </div>
    </footer>
  );
};

export default Footer;
