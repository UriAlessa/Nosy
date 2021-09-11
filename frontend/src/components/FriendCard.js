import { connect } from "react-redux";
import usersActions from "../redux/actions/usersActions";
import styles from "../styles/friendCard.module.css";

const FriendCard = ({ type, request, user, friend, ...props }) => {
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
      <div className={styles.divUserDate}>
        <div className={styles.userDate}>
          {ImageFriendCard}
          <h3>{request.user.username}</h3>
        </div>
        <div className={styles.buttons}>
          <button
            onClick={(e) => props.answerFriendRequest(false, e.target.value)}
            className={styles.buttonRefuse}
          >
            REFUSE
          </button>
          <button
            onClick={(e) => props.answerFriendRequest(true, e.target.value)}
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
          onClick={(e) => props.addFriend(e.target.value)}
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
        <button
          onClick={(e) => {
            props.sendGameRequest(e.target.value);
          }}
          value={friend.username}
        >
          invite to play
        </button>
      </div>
    );

  return (
    <section className={styles.section}>
      <div>
        <div className={styles.container}>{result}</div>
      </div>
    </section>
  );
};

const mapDispatchToProps = {
  addFriend: usersActions.addFriend,
  answerFriendRequest: usersActions.answerFriendRequest,
  sendGameRequest: usersActions.sendGameRequest,
};
export default connect(null, mapDispatchToProps)(FriendCard);
