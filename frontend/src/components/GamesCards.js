import styles from "../styles/home/gamesCards.module.css";

const GamesCards = () => {
  const data = [
    {
      title: "HISTORY",
      description:
        "To the difficulties of drawing from your notebook, it is added that the words are selected by the opponent and on the screen different clues will appear for each participant. Laughing has never been easier! Are you interested?",
      pic: "juego1.png",
    },
    {
      title: "SPORTS",
      description:
        "The app has arrived that combines the classic games of the meeting with friends before leaving. There you can find several engines to activate the unspeakable laughter and confessions among your friends! Are you interested?",
      pic: "otroJuego.png",
    },
  ];
  return (
    <section id="nextGames" className={styles.sectionGames}>
      <h2>CATEGORIES TO COME!</h2>
      <article className={styles.articleGames}>
        {data.map((data, index) => (
          <div key={index} className={styles.divGame}>
            <div
              className={styles.picGame}
              style={{ backgroundImage: `url("/assets/${data.pic}")` }}>
            </div>
            <div className={styles.descriptionGame}>
              <h3 className={styles.titleDescription}>{data.title}</h3>
              <p className={styles.pDescription}>{data.description}</p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default GamesCards;
