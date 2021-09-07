import styles from "../styles/gameButtons.module.css";
import { PlayButton, SocialMediaFooterButton } from "../components/Buttons";
import { connect } from "react-redux";

const GameButtons = (props) => {
  const sendRequest = () => {
    if (props.socket) {
      props.socket.emit("game_request", "rafaelmian1");
    }
  };

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
          <img className={styles.logo} src="/assets/logoSoloLetras.png" />
        </div>
        <div className={styles.divContainerCards}>
          <div className={styles.divGameButtons}>
            <img className={styles.avatars} src="/assets/player.png" />
            <PlayButton text="PLAY ALONE" className={styles.buttonPlay} />
          </div>
          <div className={styles.divGameButtons}>
            <img className={styles.avatars} src="/assets/debate.png" />
            <PlayButton
              text="PLAY W/ FRIEND"
              className={styles.buttonPlay}
              onClick={sendRequest}
            />
          </div>
        </div>
        <div className={styles.footerArticle}>
          <div>
            <p className={styles.pContact}>Contact | Terms of Services</p>
            <p className={styles.pCopyrigth}>2021 | © Mind Hub</p>
          </div>
          <div className={styles.divApps}>
            <div className={styles.containerApps}>
              <img src="/assets/playStore.png" className={styles.picAppPS} />{" "}
              <p className={styles.apps}>android</p>
            </div>
            <div className={styles.containerApps}>
              <img className={styles.picApp} src="/assets/ios.png" />{" "}
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
export default connect(mapStateToProps)(GameButtons);
