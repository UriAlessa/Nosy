import React, { useState, useEffect } from "react";
import styles from "../styles/home/reviews.module.css";
import { connect } from "react-redux";
import usersActions from "../redux/actions/usersActions";
import toast from "react-hot-toast";

const RankingCard = (props) => {
  const emojiSelect = {
    first: "https://i.postimg.cc/3NyQhgb8/painfull.gif",
    second: "https://i.postimg.cc/c4qDnLF2/boring.gif",
    third: "https://i.postimg.cc/SR9DvBxg/enjoit.gif",
    fourth: "https://i.postimg.cc/tTYrhZQQ/lovit.gif",
    fifth: "https://i.postimg.cc/QM2WrbMm/awesome.gif",
  };
  const [emojiFace, setEmojiFace] = useState(
    "https://i.postimg.cc/SR9DvBxg/enjoit.gif"
  );

  useEffect(() => {
    props.userData && setEmojiFace(emojiSelect[props.userData.emoji]);
    // eslint-disable-next-line
  }, [props.userData]);

  const inputHandler = (e) => {
    setEmojiFace(emojiSelect[e.target.id]);
    setEmojiFunction(e.target.id);
  };

  const setEmojiFunction = async (emoji) => {
    if (!props.token) {
      toast.error("You most to be login for this", {
        position: "top-right",
        style: {
          borderRadius: "10px",
          background: "#453ab7",
          color: "#fff",
          fontFamily: "Ubuntu, sans-serif",
        },
      });
    } else {
      await props.setEmoji(emoji).then((response) => {
        if (response.success) {
          toast.error("Thanks for your vote", {
            position: "top-right",
            style: {
              borderRadius: "10px",
              background: "#453ab7",
              color: "#fff",
              fontFamily: "Ubuntu, sans-serif",
            },
          });
        } else {
          console.log(response.response);
        }
      });
    }
  };
  return (
    <div className={styles.divGame}>
      <div className={styles.rating}>
        <input
          type="radio"
          name="fifth"
          id="rating-5"
          className={styles.rating5}
        />
        <label onClick={inputHandler} id="fifth" htmlFor="rating-5"></label>

        <input
          type="radio"
          name="fourth"
          id="rating-4"
          className={styles.rating4}
        />
        <label onClick={inputHandler} id="fourth" htmlFor="rating-4"></label>

        <input
          type="radio"
          name="third"
          id="rating-3"
          className={styles.rating3}
        />
        <label onClick={inputHandler} id="third" htmlFor="rating-3"></label>

        <input
          type="radio"
          name="second"
          id="rating-2"
          className={styles.rating2}
        />
        <label onClick={inputHandler} id="second" htmlFor="rating-2"></label>

        <input
          type="radio"
          name="first"
          id="rating-1"
          className={styles.rating1}
        />
        <label onClick={inputHandler} id="first" htmlFor="rating-1"></label>

        <div className={styles.emojiWrapper}>
          <div className={styles.emoji}>
            <img className={styles.rating} src={emojiFace} alt="face" />
          </div>
        </div>
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
