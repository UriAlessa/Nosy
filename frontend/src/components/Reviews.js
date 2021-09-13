import styles from "../styles/home/reviews.module.css";
import ReviewSlide from "../components/ReviewSlide";
import RankingCard from "../components/RankingCard";
import ReviewAddComment from "./ReviewAddNewOne";
import toast from "react-hot-toast";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import usersActions from "../redux/actions/usersActions";

const Reviews = (props) => {
  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    getReviewsFunction();
    // eslint-disable-next-line
  }, []);

  const getReviewsFunction = async () => {
    let reviews = await props.getReviews();
    setAllReviews(reviews.response);
  };

  // let render = allReviews.length !== 0 &&
  //   allReviews.map((info, index) => {
  //     return <ReviewSlide oneReview={info} key={"Review" + index} />
  //   })

  const inputHandler = (e) => {
    if (!props.token) {
      return toast.error("You most to be login for this", {
        position: "top-right",
        style: {
          borderRadius: "10px",
          background: "#453ab7",
          color: "#fff",
          fontFamily: "Ubuntu, sans-serif",
        },
      });
    } else {
      return (
        <div>
          <ReviewAddComment />
        </div>
      );
    }
  };

  return (
    <section id="reviews" className={styles.sectionGames}>
      <h2> WHAT ARE THEY SAYING?</h2>
      <h4 className={styles.subtitleDescription}>
        Memorable moments from other players
      </h4>
      <article className={styles.articleGames}>
        <div className={styles.divGame}>
          <div className={styles.carousel}>
            {" "}
            <ReviewSlide allReviews={allReviews} />
          </div>
        </div>
        <div className={styles.divGame}>
          <RankingCard />
          {/* {props.token ? <ReviewAddComment /> : <img className={styles.picGame} src="https://i.postimg.cc/Zq2ptpcd/12.png" />} */}
          {props.token ? (
            <ReviewAddComment />
          ) : (
            <div>
              <button
                className={styles.buttonAddComment}
                onClick={inputHandler}
              >
                +
              </button>
              <img
                className={styles.picGame}
                src="https://i.postimg.cc/9FbTSStZ/review.png"
                alt='review'
              />
              <p className={styles.pDescription}>
                The reviews can be seen for 24 hours ... don't miss them!
              </p>
            </div>
          )}
        </div>
      </article>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.users.token,
  };
};

const mapDispatchToProps = {
  getReviews: usersActions.getReviews,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);