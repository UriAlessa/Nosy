import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../styles/home/reviews.module.css";
import React, { useState } from "react";
let moment = require("moment");

const ReviewSlide = (props) => {

  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024
          },
          items: 1,
          partialVisibilityGutter: 40
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0
          },
          items: 1,
          partialVisibilityGutter: 30
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464
          },
          items: 1,
          partialVisibilityGutter: 30
        }
      }}
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >

      {props.allReviews.map((review, index) => {
        return (
          <div className={styles.slides}>
            <div>
              {review.userId && <div className={styles.reviewsPosted}><div ><img className={styles.avatar} src={review.userId.avatar} /></div><p className={styles.pDescription}>@{review.userId.username}</p></div>}
              <h4 className={styles.titleDescription}>"{review.title}"</h4>
              <div
                className={styles.picGame}
                style={{ backgroundImage: `url("${review.img}}")` }}
              ></div>
            </div>
            <div>

              <p className={styles.subtitleDescription}>
                {moment(review.date).fromNow()}
              </p>
              <h3 className={styles.titleDescription}>{review.author}</h3>
              <p className={styles.pDescription}>{review.description}</p>
            </div>
          </div>
        );
      })}


    </Carousel>

  );
};

export default ReviewSlide;