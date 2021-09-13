import styles from "../styles/home/reviews.module.css";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { connect } from "react-redux";
import usersActions from "../redux/actions/usersActions";

const ReviewAddNewOne = (props) => {
  const [reviews, setReviews] = useState([]);
  const [msjR, setMsjR] = useState("")

  const [newReview, setNewReview] = useState({
    img: "",
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
    if (Object.values(newReview).includes('')) {
      setMsjR("-the title and description cant be empty-")
    } else {
      setNewReview({
        img: "",
        title: "",
        description: "",
      });
      setMsjR("")
      try {
        let response = await props.postNewReview(newReview, props.token);
        if (response.success) {
          setReviews(response.response);
          toast.success(<div
            className={styles.reviewsPosted1}
          >
            <div>
              <img
                className={styles.avatar}
                src={props.userData.avatar}
                alt="img"
              />
            </div>
            <div>
              <p className={styles.pDescription1}>
                {props.userData.username}
              </p>
              <p className={styles.pDescription1}>
                Excellent! you going to see your Review in the playlist of review soon :)
              </p>
            </div>
            <div>
            </div>
          </div>, {
            position: "top-center",
            style: {
              borderRadius: "10px",
              background: "#453ab7",
              color: "#fff",
              fontFamily: "Ubuntu, sans-serif",
            },
          });
        } else {
          setMsjR("-Alphabetic characters only-")
        }
      } catch (error) {
        toast.error("Nup... we can´t do this in this moment, so so sorry", {
          position: "top-center",
          style: {
            borderRadius: "10px",
            background: "#453ab7",
            color: "#fff",
            fontFamily: "Ubuntu, sans-serif",
          },
        });
      }
    }
  };
  return (
    <div>
      <small>
        <span className="">
          <p className={styles.submitButton}>Post THE moment</p>
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
            maxLength="18"
            placeholder="title -18 characters max-"
            value={newReview.title}
            onChange={inputHandler}
          />
          <input
            className={styles.inputs}
            type="textarea"
            name="description"
            placeholder="description -100 characters max-"
            maxLength="100"
            value={newReview.description}
            onChange={inputHandler}
          />

          <div className="joiErrors">{ }</div>
          <p className={styles.messageR}>{msjR}</p>
          <button className={styles.submitButton2}>
            <small>
              <span onClick={formPostReview}>Send</span>
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
    userData: state.users.userData,
  };
};

const mapDispatchToProps = {
  postNewReview: usersActions.postNewReview,
  getReviews: usersActions.getReviews,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewAddNewOne);
