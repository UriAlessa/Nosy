import styles from "../styles/reviews.module.css";
const ReviewSlide = (props) => {
  return (
    <div className={styles.divGame}>
            <h4 className={styles.subtitleDescription}>{props.oneReview.title}</h4>
      <div
       className={styles.picGame}
       style={{ backgroundImage: `url("${props.oneReview.img}}")` }}
      ></div>
      <h3 className={styles.titleDescription}>{props.oneReview.author}</h3>
      <p className={styles.pDescription}>{props.oneReview.date}</p>
      <p className={styles.pDescription}>{props.oneReview.description}</p>
    </div>
  );
};
export default ReviewSlide;
