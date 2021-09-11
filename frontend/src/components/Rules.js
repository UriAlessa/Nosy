import styles from "../styles/home/rules.module.css";
import RuleCard from "./RuleCard";

const Rules = () => {
  const InfoCards = [
    {
      src: "https://i.postimg.cc/90NC9kM7/2.png",
      title: "BE READY TO PROCRASTINATE",
      description:
        "Choose an option. Alone or invite a friend ... who would you want to tempt?!",
    },
    {
      src: "https://i.postimg.cc/pXS3PqDS/3.png",
      title: "GET TO IT",
      description:
        "Put your greatest effort into apprehending everything, laugh or cry ... and don't forget to take a photo of the moment!",
    },
    {
      src: "https://i.postimg.cc/HsqCCX7d/1.png",
      title: "REWARD OR PUNISHMENT",
      description:
        "You did it! do not forget to post your experience! to invite others to live it!!",
    },
  ];

  const render = InfoCards.map((info) => {
    return <RuleCard key={info.title} infoCard={info} />;
  });

  return (
    <section id="howToPlay" className={styles.section}>
      <h2> HOW TO PLAY THE GAME?</h2>
      <p> You sure know how to do it now!</p>
      <div className={styles.containerCards}>{render}</div>
    </section>
  );
};
export default Rules;
