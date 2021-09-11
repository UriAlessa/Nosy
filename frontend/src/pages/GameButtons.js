import styles from "../styles/gameButtons.module.css";
import { PlayButton, SocialMediaFooterButton } from "../components/Buttons";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import otherActions from "../redux/actions/otherActions";

const GameButtons = (props) => {
  return (
    <section
      className={styles.sectionGameButtons}
      style={{ backgroundImage: "url('/assets/background.png')" }}
    >
      <article className={styles.articleGameButtons}>
        <div className={styles.titleArticle}>
          <div className={styles.socialMedia}>
            <SocialMediaFooterButton icon="twitter" />
            <SocialMediaFooterButton icon="instagram" />
            <SocialMediaFooterButton icon="youtube" />
            <SocialMediaFooterButton icon="discord" />
          </div>
          <img
            className={styles.logo}
            src="/assets/logoSoloLetras.png"
            alt="logo"
          />
        </div>
        <div className={styles.divContainerCards}>
          <div className={styles.divGameButtons}>
            <img
              className={styles.avatars}
              src="/assets/player.png"
              alt="player"
            />
            <Link to="/game" onClick={() => props.setPlayNow(true)}>
              <PlayButton text="PLAY ALONE" className={styles.buttonPlay} />
            </Link>
          </div>
          <div className={styles.divGameButtons}>
            <img
              className={styles.avatars}
              src="/assets/debate.png"
              alt="debate"
            />
            <PlayButton text="PLAY W/ FRIEND" className={styles.buttonPlay} />
          </div>
        </div>
        <div className={styles.footerArticle}>
          <div>
            <p className={styles.pContact}>Contact | Terms of Services</p>
            <p className={styles.pCopyrigth}>2021 | © Mind Hub</p>
          </div>
          <div className={styles.divApps}>
            <div className={styles.containerApps}>
              <img
                src="/assets/playStore.png"
                className={styles.picAppPS}
                alt="playStore"
              />{" "}
              <p className={styles.apps}>android</p>
            </div>
            <div className={styles.containerApps}>
              <img className={styles.picApp} src="/assets/ios.png" alt="ios" />{" "}
              <p className={styles.apps}>ios</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    socket: state.users.socket,
  };
};

const mapDispatchToProps = {
  setPlayNow: otherActions.setPlayNow,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameButtons);
