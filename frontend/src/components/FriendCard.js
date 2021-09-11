import { connect } from "react-redux";
import usersActions from "../redux/actions/usersActions";
import styles from "../styles/friendCard.module.css";

const FriendCard = ({ type, request, user, friend, ...props }) => {
  const ImageFriendCard = (
    <img
      className={styles.logo}
      src={
        type === "sendRequest"
          ? user.avatar
          : type === "culo"
          ? friend.avatar
          : request.user.avatar
      }
      alt="logo"
    />
  );

  let result =
    type === "acceptRequest" ? (
      <div>
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
            className={styles.buttonAccept}
          >
            ACCEPT
          </button>
        </div>
      </div>
    ) : type === "sentRequest" ? (
      <div>
        {ImageFriendCard}
        <h3>{request.user.username}</h3>
      </div>
    ) : type === "sendRequest" ? (
      <div>
        {ImageFriendCard}
        <h3>{user.username}</h3>
        <button
          onClick={(e) => props.addFriend(e.target.value)}
          value={user.username}
          className={styles.buttonAccept}
        >
          SEND INVITATION
        </button>
      </div>
    ) : (
      <div>
        {ImageFriendCard}
        <h3>{friend.username}</h3>
        <button
          onClick={(e) => {
            props.sendGameRequest(e.target.value);
          }}
          value={friend.username}
          className={styles.buttonAccept}
        >
          invite friend
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
