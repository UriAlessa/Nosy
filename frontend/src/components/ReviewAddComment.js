import styles from "../styles/home/reviews.module.css";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { connect } from "react-redux";
import usersActions from "../redux/actions/usersActions";

const ReviewAddComment = (props) => {
  const [comments, setComments] = useState([]);

  const [newComment, setNewComment] = useState({
    img: "" /**picture del id del author */,
    author: props._id /**nombre del id del author */,
    date: "" /**reservar la fecha en que se hizo la review */,
    title: "",
    description: "",
  });

  const inputHandler = (e) => {
    setNewComment({
      ...newComment,
      [e.target.name]: e.target.value,
    });
  };

  const formPostComment = (e) => {
    setComments({
      ...comments,
      newComment,
    });
  };

  return (
    <div className={styles.divGame}>
      <small>
        <span className="">
          <p className={styles.submitButton}>Post new review</p>
          <input
            className={styles.inputs}
            type="text"
            name="img"
            placeholder="picture of the moment"
            value={newComment.img}
            onChange={inputHandler}
          />
          <input
            className={styles.inputs}
            type="text"
            name="title"
            placeholder="title of the momment"
            value={newComment.title}
            onChange={inputHandler}
          />
          <input
            className={styles.inputs}
            type="text"
            name="description"
            placeholder="description"
            value={newComment.description}
            onChange={inputHandler}
          />

          <div className="joiErrors">{}</div>
          <button className={styles.submitButton}>
            <small>
              <span onClick={formPostComment}>Post</span>
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

export default connect(mapStateToProps)(ReviewAddComment);
