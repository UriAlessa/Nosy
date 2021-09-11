import { connect } from "react-redux";
import usersActions from "../redux/actions/usersActions";
import styles from "../styles/friendCard.module.css";

const FriendCard = ({ type, request, user, friend, ...props }) => {
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
    ) : type === "sendRequest" ? (
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
    ) : (
      <div>
        <h3>{friend.username}</h3>
        <button
          onClick={(e) => {
            props.socket.emit("game_request", e.target.value);
            props.sendGameRequest(e.target.value);
          }}
          value={friend.username}
          className={styles.buttonAccept}
        >
          SEND GAME INVITATION
        </button>
      </div>
    );

  return (
    <section className={styles.section}>
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
      <div>
        <div className={styles.container}>{result}</div>
      </div>
    </section>
  );
};
const mapStateToProps = (state) => {
  return { socket: state.users.socket };
};
const mapDispatchToProps = {
  addFriend: usersActions.addFriend,
  answerFriendRequest: usersActions.answerFriendRequest,
  sendGameRequest: usersActions.sendGameRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(FriendCard);
