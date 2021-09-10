import styles from "../styles/home/reviews.module.css";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { connect } from "react-redux";
import usersActions from "../redux/actions/usersActions";

const ReviewAddNewOne = (props) => {
  const [reviews, setReviews] = useState([]);

  const [newReview, setNewReview] = useState({
    img: "" /**picture del id del author */,
    title: "",
    description: "",
  });

  const inputHandler = (e) => {
    setNewReview({
      ...newReview,
      [e.target.name]: e.target.value,
    });
  };

  const formPostReview = async (e) => {
    setNewReview({
      img: "" /**picture del id del author */,
      title: "",
      description: "",
    });
    try {
      let response = await props.postNewReview(newReview, props.token);
      if (response.success) {
        setReviews(response.response);
        toast.error(
          "Excelente! you going to see your Review in the playlist of review soon",
          {
            position: "top-right",
            style: {
              borderRadius: "10px",
              background: "#453ab7",
              color: "#fff",
              fontFamily: "Ubuntu, sans-serif",
            },
          }
        );
      } else {
        console.log(response);
        toast.error("Something went wrong! try again later please!", {
          position: "top-right",
          style: {
            borderRadius: "10px",
            background: "#453ab7",
            color: "#fff",
            fontFamily: "Ubuntu, sans-serif",
          },
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Nup... we can´t do this in this momento, so so sorry", {
        position: "top-right",
        style: {
          borderRadius: "10px",
          background: "#453ab7",
          color: "#fff",
          fontFamily: "Ubuntu, sans-serif",
        },
      });
    }
  };

  return (
    <div className={styles.divGame}>
      <small>
        <span className="">
          <p className={styles.submitButton}>Post new review</p>
          <input
            className={styles.inputs}
            type="textarea"
            name="img"
            placeholder="picture of the moment"
            value={newReview.img}
            onChange={inputHandler}
          />
          <input
            className={styles.inputs}
            type="textarea"
            name="title"
            placeholder="title of the moment"
            value={newReview.title}
            onChange={inputHandler}
          />
          <input
            className={styles.inputs}
            type="textarea"
            name="description"
            placeholder="description"
            value={newReview.description}
            onChange={inputHandler}
          />

          <div className="joiErrors">{}</div>
          <button className={styles.submitButton}>
            <small>
              <span onClick={formPostReview}>Post</span>
            </small>
          </button>
        </span>
      </small>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.users.token,
  };
};

const mapDispatchToProps = {
  postNewReview: usersActions.postNewReview,
  getReviews: usersActions.getReviews,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewAddNewOne);
