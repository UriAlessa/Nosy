import React, { useState, useEffect } from "react";
import styles from "../styles/home/reviews.module.css";
import { connect } from "react-redux";
import usersActions from "../redux/actions/usersActions";

var i = 0;

const RankingCard = (props) => {
  const [msj, setMsj] = useState("")

  const emojiSelect = {
    first: "https://i.postimg.cc/3NyQhgb8/painfull.gif",
    second: "https://i.postimg.cc/c4qDnLF2/boring.gif",
    third: "https://i.postimg.cc/SR9DvBxg/enjoit.gif",
    fourth: "https://i.postimg.cc/tTYrhZQQ/lovit.gif",
    fifth: "https://i.postimg.cc/QM2WrbMm/awesome.gif",
  };

  const notLoggedIn = {
    1: "https://i.postimg.cc/Qt1wq496/1.gif",
    2: "https://i.postimg.cc/nVKNjWtr/5.gif",
    3: "https://i.postimg.cc/HntNqrtX/3.gif",
    4: "https://i.postimg.cc/X7HH9S1j/4.gif",
    5: "https://i.postimg.cc/fb61mnLt/2.gif",
    6: "https://i.postimg.cc/ZqyMT7cT/6.gif",
    7: "https://i.postimg.cc/G2dJZqgg/10.gif",
    8: "https://i.postimg.cc/1RKY5NpN/7.gif",
    9: "https://i.postimg.cc/zvD7R0nH/8.gif",

  }

  const voteMessage = {
    first: "Oh! We will try to be better in the future",
    second: "Ouch ... okay, let's cry and then try this topic",
    third: "Yeiii! We are glad you like it",
    fourth: "Awww ... we love you too",
    fifth: "Excellent! Invite your friends here!",
  }

  const message = {
    1: "You need to login for this",
    2: "No, really, you have to ...",
    3: "Are you kidding me?",
    4: "Come on ... do you speak English?",
    5: "Stop!",
    6: "Really ... you have nothing better to do",
    7: "I have to work ... stop now!",
    8: "Well ...'intensity' is your middle name, right?",
    9: "Mommy...!"
  }

  const [emojiFace, setEmojiFace] = useState(
    "https://i.postimg.cc/SR9DvBxg/enjoit.gif"
  );

  useEffect(() => {
    props.userData && setEmojiFace(emojiSelect[props.userData.emoji]);
    // eslint-disable-next-line
  }, [props.userData]);

  const inputHandler = (e) => {
    setEmojiFace(emojiSelect[e.target.id]);
    setMsj(voteMessage[e.target.id])
    setEmojiFunction(e.target.id);
  };

  const setEmojiFunction = async (emoji) => {
    if (!props.token) {
      i++
      setEmojiFace(notLoggedIn[i < 8 ? i : 9])
      setMsj(message[i < 8 ? i : 9])
    } else {
      await props.setEmoji(emoji)
    }
  };

  return (
    <div>
      <div className={styles.rating}>
        <input
          type="radio"
          name="rating"
          id="rating-5"
          className={styles.rating5}
        />
        <label onClick={inputHandler} id="fifth" htmlFor="rating-5"></label>

        <input
          type="radio"
          name="rating"
          id="rating-4"
          className={styles.rating4}
        />
        <label onClick={inputHandler} id="fourth" htmlFor="rating-4"></label>

        <input
          type="radio"
          name="rating"
          id="rating-3"
          className={styles.rating3}
        />
        <label onClick={inputHandler} id="third" htmlFor="rating-3"></label>

        <input
          type="radio"
          name="rating"
          id="rating-2"
          className={styles.rating2}
        />
        <label onClick={inputHandler} id="second" htmlFor="rating-2"></label>

        <input
          type="radio"
          name="rating"
          id="rating-1"
          className={styles.rating1}
        />
        <label onClick={inputHandler} id="first" htmlFor="rating-1"></label>
        <div className={styles.emojiWrapper}>
          <div className={styles.emoji}>
            <img className={styles.rating} src={emojiFace} alt="face" />
          </div>
        </div>
        <p className={styles.message}>{msj}</p>
      </div>
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
  setEmoji: usersActions.setEmoji,
};

export default connect(mapStateToProps, mapDispatchToProps)(RankingCard);
