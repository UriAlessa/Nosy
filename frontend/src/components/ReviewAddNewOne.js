import styles from "../styles/home/reviews.module.css";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { connect } from "react-redux";
import usersActions from "../redux/actions/usersActions";

const ReviewAddNewOne = (props) => {
  const [reviews, setReviews] = useState([]);

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
    setNewReview({
      img: "",
      title: "",
      description: "",
    });
    try {
      let response = await props.postNewReview(newReview, props.token);
      if (response.success) {
        setReviews(response.response);
        toast.custom((t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={props.userData.avatar}
                    alt="img"
                  />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {props.userData.username}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Excelente! you going to see your Review in the playlist of
                    review soon
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Fantastic!
              </button>
            </div>
          </div>
        ));
      } else {
        console.log(response);
        toast.error("Something went wrong! try again later please!", {
          position: "top-center",
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

          <div className="joiErrors">{}</div>
          <button className={styles.submitButton}>
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
