import styles from "../styles/gamesCards.module.css";

const GamesCards = () => {
  const data = [
    {
      title: "Paint me",
      subtitle: "app . desktop . pwa",
      description:
        "To the difficulties of drawing from your notebook, it is added that the words are selected by the opponent and on the screen different clues will appear for each participant. Laughing has never been easier! Are you interested?",
      buttonText: "hurry up !!!",
      pic: "pic1.png",
    },
    {
      title: "The previous",
      subtitle: "desktop . mobile",
      description:
        "The app has arrived that combines the classic games of the meeting with friends before leaving. There you can find several engines to activate the unspeakable laughter and confessions among your friends! Are you interested?",
      buttonText: "Right away!",
      pic: "pic2.png",
    },
  ];
  return (
    <section id="nextGames" className={styles.sectionGames}>
      <h2 className={styles.title}>Next Games!</h2>
      <article className={styles.articleGames}>
        {data.map((data, index) => (
          <div key={index} className={styles.divGame}>
            <div
              className={styles.picGame}
              style={{ backgroundImage: `url("/assets/${data.pic}")` }}></div>
            <div className={styles.descriptionGame}>
              <h3 className={styles.titleDescription}>{data.title}</h3>
              <h4 className={styles.subtitleDescription}>{data.subtitle}</h4>
              <p className={styles.pDescription}>{data.description}</p>
              <button className={styles.buttonDescription}>
                {data.buttonText}
              </button>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default GamesCards;
