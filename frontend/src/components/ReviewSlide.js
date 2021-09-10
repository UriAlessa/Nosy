import styles from "../styles/home/reviews.module.css";
const ReviewSlide = (props) => {

  // let expired = 2592000000;//**hace unos segundos */
  // let dateNow= Date.now()

<<<<<<< HEAD
  const today= props.oneReview.date/360
=======
  const today = props.oneReview.date / 360
>>>>>>> a7ebce5a66bd0ba13b99b60d733f23bcae583193
  return (
    <div >
      <h4 className={styles.titleDescription}>"{props.oneReview.title}"</h4>
      <p className={styles.subtitleDescription}>{today}</p>
<<<<<<< HEAD
      <div
       className={styles.picGame}
       style={{ backgroundImage: `url("${props.oneReview.img}}")` }}
=======

      <div
        className={styles.picGame}
        style={{ backgroundImage: `url("${props.oneReview.img}}")` }}
>>>>>>> a7ebce5a66bd0ba13b99b60d733f23bcae583193
      ></div>
      <h3 className={styles.titleDescription}>{props.oneReview.author}</h3>
      <p className={styles.pDescription}>{props.oneReview.description}</p>
    </div>
  );
};
export default ReviewSlide;
