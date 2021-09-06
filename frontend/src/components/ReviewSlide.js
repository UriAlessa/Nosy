import styles from "../styles/reviews.module.css"
const ReviewSlide = (props) => {
    return (
        <div className={styles.card}>
            <div className="imgCard" style={{ backgroundImage: `url("${props.oneReview.src}}")` }}></div>
            <img src={props.oneReview.src} />
            <h3>{props.oneReview.author}</h3>
            <p>{props.oneReview.date}</p>
            <h4>{props.oneReview.title}</h4>
            <p>{props.oneReview.description}</p>
        </div>
    )

}
export default ReviewSlide