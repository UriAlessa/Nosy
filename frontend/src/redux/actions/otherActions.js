import toast from "react-hot-toast";

const otherActions = {
  showMenu: (boolean) => {
    return (dispatch, getState) => {
      dispatch({ type: "SHOW_MENU", payload: boolean });
    };
  },
  setPlayNow: (boolean) => {
    return (dispatch) => {
      dispatch({ type: "PLAY_NOW", payload: boolean });
    };
  },
  appMasterFunction: (socket, logInLS) => {
    return async () => {
      socket.on("game_request", async (username) => {
        console.log(username);
        await logInLS();
        toast(username + " invited you to a game!", {
          icon: "🎮",
        });
      });
      socket.on("answer_game_request", async (username) => {
        console.log(username);
        await logInLS();
      });
      socket.on("change_current_player", async (username) => {
        console.log(username);
        await logInLS();
      });
      socket.on("friend_request", async (username) => {
        console.log(username);
        await logInLS();
        toast(username + " has sent you a friend request!", {
          icon: "🤝",
        });
      });
      socket.on("accepted_friend_request", async (username) => {
        console.log(username);
        await logInLS();
        toast(
          username + " accepted your friend request! Invite him to a game",
          {
            icon: "🤝",
          }
        );
      });
      socket.on("connected", async (username) => {
        console.log(username);
        await logInLS();
      });
      socket.on("disconnection", async (username) => {
        console.log(username);
      });
    };
  },
};
export default otherActions;
