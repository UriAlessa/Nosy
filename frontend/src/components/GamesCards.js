import styles from "../styles/home/gamesCards.module.css";

const GamesCards = () => {
  const data = [
    {
      title: "CORONA-DATA",
      description:
        "She was highly discriminated against because of her appearance until she learned to take advantage of her memory, and today she guards all the memorable events of the health catastrophe in recent years.",
      pic: "history.png",
    },
    {
      title: "SPORTS",
      description:
        "He was never adept at sports, however no one can beat his memory, and for this reason he guards this category and the most curious data about it! If you feel identified, do not stop entering the game because it is coming soon!",
      pic: "sport3.png",
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
