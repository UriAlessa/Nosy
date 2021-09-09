import React, { useState, useEffect } from "react";
import style from "../styles/reviews.module.css";
import { connect } from "react-redux";

const RankingCard = (props) => {
  const { emojiFace, setEmojiFace } = useState("");

  const inputHandler = (e) => {
    console.log("imputHandler activado");
    setEmojiFace((emojiFace = e.target.value));
  };

  return (
    <div className={style.container}>
      <div className="feedback">
        <div className={style.rating}>
          <input
            type="radio"
            name="5"
            className={style.rating5}
            value={emojiFace}
            onChange={inputHandler}
          />
          <label htmlFor="rating-5"></label>
          <input
            type="radio"
            name="4"
            className={style.rating4}
            value={emojiFace}
            onChange={inputHandler}
          />
          <label htmlFor="rating-4"></label>
          <input
            type="radio"
            name="3"
            className={style.rating3}
            value={emojiFace}
            onChange={inputHandler}
          />
          <label htmlFor="rating-3"></label>
          <input
            type="radio"
            name="2"
            className={style.rating2}
            value={emojiFace}
            onChange={inputHandler}
          />
          <label htmlFor="rating-2"></label>
          <input
            type="radio"
            name="1"
            className={style.rating1}
            value={emojiFace}
            onChange={inputHandler}
          />
          <label htmlFor="rating-1"></label>
          <div className={style.emojiWrapper}>
            <div className={style.emoji}>
              <img
                className={style.rating1}
                src="https://i.postimg.cc/1RVCXqrD/painfull.gif"
                alt="painful face"
              />
              <img
                className={style.rating2}
                src="https://i.postimg.cc/c4qDnLF2/boring.gif"
                alt="painful face"
              />
              <img
                className={style.rating3}
                src="https://i.postimg.cc/SR9DvBxg/enjoit.gif"
                alt="painful face"
              />
              <img
                className={style.rating4}
                src="https://i.postimg.cc/tTYrhZQQ/lovit.gif"
                alt="painful face"
              />
              <img
                className={style.rating5}
                src="https://i.postimg.cc/1RVCXqrD/painfull.gif"
                alt="painful face"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankingCard;
