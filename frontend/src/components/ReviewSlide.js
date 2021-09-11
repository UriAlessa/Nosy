import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/home/reviews.module.css";
import React, { useState } from "react";
let moment = require("moment");

const ReviewSlide = (props) => {
  console.log(props.allReviews)
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  
  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === props.allReviews.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? props.allReviews.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  // const [userId] = props.allReviews;
  // const [avatar, username] = userId;
  // console.log(userId)
  console.log(props.allReviews)
  const slides = props.allReviews.map((review, index) => {
   
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index}
      >
        <div className={styles.slides}>
          <div>
          {review.userId && <div className={styles.reviewsPosted}><div className={styles.avatar}  style={{ backgroundImage: `url("${review.userId.avatar}}")` }}></div><p className={styles.pDescription}>@{review.userId.username}</p></div>}
      

          <div
            className={styles.picGame}
            style={{ backgroundImage: `url("${review.img}}")` }}
          ></div>
          </div>
          <div>
          <h4 className={styles.titleDescription}>"{review.title}"</h4>
          <p className={styles.subtitleDescription}>
            {moment(review.date).fromNow()}
          </p>
          <h3 className={styles.titleDescription}>{review.author}</h3>
          <p className={styles.pDescription}>{review.description}</p>
          </div>
        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel className= "carousel-fade"
      activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={slides}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />

      {slides}
      <CarouselControl
        direction="prev"
        directionText="PREVIOUS"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="NEXT"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default ReviewSlide;
