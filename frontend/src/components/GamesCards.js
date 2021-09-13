import styles from "../styles/home/gamesCards.module.css";

const GamesCards = () => {
  const data = [
    {
      title: "HISTORY",
      description:
        "Sabri los mandará",
      pic: "juego1.png",
    },
    {
      title: "SPORTS",
      description:
        "Sabri los mandará",
      pic: "otroJuego.png",
    },
  ];
  return (
    <section id="nextGames" className={styles.sectionGames}>
      <h2>COOMING SOON!</h2>
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
