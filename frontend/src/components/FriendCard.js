import { useState } from "react";
import { connect } from "react-redux";
import usersActions from "../redux/actions/usersActions";
import styles from "../styles/friendCard.module.css";
import stylesConected from "../styles/usercard.module.css";

const FriendCard = ({
  type,
  request,
  user,
  friend,
  game = false,
  ...props
}) => {
  const [clicked, setClicked] = useState(false);
  const ImageFriendCard = (
    <div
      className={styles.logo}
      style={{
        backgroundImage: `url('${
          type === "sendRequest"
            ? user.avatar
            : type === "friends"
            ? friend.avatar
            : request.user.avatar
        }')`,
      }}
    ></div>
  );

  let result =
    type === "acceptRequest" ? (
      <div className={styles.divFriend}>
        <div className={styles.friendInfo}>
          {ImageFriendCard}
          <h3>{request.user.username}</h3>
        </div>
        <div className={styles.buttons}>
          <button
            onClick={(e) =>
              game
                ? props.answerGameRequest(
                    false,
                    e.target.value,
                    props.userData.game_requests.game_id
                  )
                : props.answerFriendRequest(false, e.target.value)
            }
            className={styles.buttonRefuse}
            value={request.user.username}
          >
            REFUSE
          </button>
          <button
            onClick={(e) =>
              game
                ? props.answerGameRequest(
                    true,
                    e.target.value,
                    props.userData.game_requests.game_id
                  )
                : props.answerFriendRequest(true, e.target.value)
            }
            value={request.user.username}
          >
            ACCEPT
          </button>
        </div>
      </div>
    ) : type === "sentRequest" ? (
      <div className={styles.divFriend}>
        {ImageFriendCard}
        <h3>{request.user.username}</h3>
      </div>
    ) : type === "sendRequest" ? (
      <div className={styles.divFriend}>
        <div className={styles.friendInfo}>
          {ImageFriendCard}
          <h3>{user.username}</h3>
        </div>
        <button
          onClick={(e) => {
            props.addFriend(e.target.value);
            setClicked(true);
            setTimeout(() => props.setUserSearched(null), 1000);
          }}
          disabled={clicked}
          className={clicked ? styles.buttonRefuse : styles.accept}
          value={user.username}
        >
          SEND INVITATION
        </button>
      </div>
    ) : (
      <div className={styles.divFriend}>
        <div className={styles.friendInfo}>
          {ImageFriendCard}
          <h3>{friend.username}</h3>
        </div>
        <div className={styles.connection}>
          {
            <div className={stylesConected.divConnect}>
              <img
                className={stylesConected.connected}
                src={
                  friend.connected
                    ? "/assets/online.png"
                    : "/assets/offline.png"
                }
                alt="conected"
              />
            </div>
          }
          <button
            onClick={(e) => {
              props.sendGameRequest(e.target.value);
            }}
            value={friend.username}
          >
            invite to play
          </button>
        </div>
      </div>
    );

  return (
    <section
      className={styles.sectionFriend} //type === "acceptRequest" ? styles.section :
    >
      <div className={styles.container}>{result}</div>
    </section>
  );
};
const mapStateToProps = (state) => {
  {
    return {
      userData: state.users.userData,
    };
  }
};
const mapDispatchToProps = {
  addFriend: usersActions.addFriend,
  answerFriendRequest: usersActions.answerFriendRequest,
  sendGameRequest: usersActions.sendGameRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(FriendCard);
