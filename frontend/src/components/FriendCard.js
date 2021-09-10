import { connect } from "react-redux";
import usersActions from "../redux/actions/usersActions";
import styles from "../styles/friendCard.module.css";

const FriendCard = ({ type, request, user, ...props }) => {
  let result =
    type === "acceptRequest" ? (
      <div className={styles.containerButtons}>
        <h3>{request.user.username}</h3>
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
    ) : type === "sentRequest" ? (
      <div>
        <h3>{request.user.username}</h3>
      </div>
    ) : (
      type === "sendRequest" && (
        <div>
          <h3>{user.username}</h3>
          <button
            onClick={(e) => props.addFriend(e.target.value)}
            value={user.username}
            className={styles.buttonAccept}
          >
            SEND INVITATION
          </button>
        </div>
      )
    );

  return (
    <section className={styles.section}>
      <img
        className={styles.logo}
        src={type === "sendRequest" ? user.avatar : request.user.avatar}
        alt="logo"
      />
      <div>
        <div className={styles.container}>{result}</div>
      </div>
    </section>
  );
};

const mapDispatchToProps = {
  addFriend: usersActions.addFriend,
  answerFriendRequest: usersActions.answerFriendRequest,
};
export default connect(null, mapDispatchToProps)(FriendCard);
