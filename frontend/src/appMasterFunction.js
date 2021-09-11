import toast from "react-hot-toast";
import { connect } from "react-redux";
import gamesActions from "./redux/actions/gamesActions";
import otherActions from "./redux/actions/otherActions";
import usersActions from "./redux/actions/usersActions";

const appMasterFunction = (props) => {
  if (props.socket && props.token) {
    props.socket.on("game_request", async (username) => {
      console.log(username);
      await props.logInLS();
      toast(username + " invited you to a game!", {
        icon: "🎮",
      });
    });
    props.socket.on("answer_game_request", async (username) => {
      console.log(username);
      await props.logInLS();
    });
    props.socket.on("change_current_player", async (username) => {
      console.log(username);
      await props.logInLS();
    });
    props.socket.on("friend_request", async (username) => {
      console.log(username);
      await props.logInLS();
      toast(username + " has sent you a friend request!", {
        icon: "🤝",
      });
    });
    props.socket.on("accepted_friend_request", async (username) => {
      console.log(username);
      await props.logInLS();
      toast(username + " accepted your friend request! Invite him to a game", {
        icon: "🤝",
      });
    });
    props.socket.on("connected", async (username) => {
      console.log(username);
      await props.logInLS();
    });
    props.socket.on("disconnection", async (username) => {
      console.log(username);
    });
  }
};
const mapStateToProps = (state) => {
  return {
    token: state.users.token,
    menu: state.other.menu,
    socket: state.users.socket,
  };
};

const mapDispatchToProps = {
  logInLS: usersActions.logInLS,
  showMenuResponsive: otherActions.showMenu,
  setGame: gamesActions.setGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(appMasterFunction);
