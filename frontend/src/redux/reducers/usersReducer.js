import io from "socket.io-client";

const initialState = {
  token: null,
  username: null,
  avatar: null,
  socket: null,
  userData: null,
};

const usersReducer = (state = initialState, action) => {
  console.log("wep");
  switch (action.type) {
    case "LOG_IN_USER":
      localStorage.setItem("token", action.payload.token);
      let socket = state.socket
        ? state.socket
        : io("https://benosy.herokuapp.com/", {
            query: "token=" + action.payload.token,
          });
      return {
        token: action.payload.token,
        username: action.payload.user.username,
        avatar: action.payload.user.avatar,
        userData: action.payload.userData,
        socket,
      };
    case "UPDATE_USER":
      break;
    case "SEND_FRIEND_REQUEST":
      console.log("wep");
      state.socket.emit("friend_request", action.payload);
      return state;
    case "ACCEPT_FRIEND_REQUEST":
      console.log("wep");
      state.socket.emit("accepted_friend_request", action.payload);
      return state;
    case "SEND_GAME_REQUEST":
      console.log("wep");
      state.socket.emit("game_request", action.payload);
      return state;
    case "ACCEPT_GAME_REQUEST":
      console.log("wep");
      state.socket.emit("answer_game_request", action.payload);
      return state;
    case "LOG_OUT":
      localStorage.removeItem("token");
      state.socket.emit("disconnection");
      return {
        initialState,
      };
    default:
      return state;
  }
};

export default usersReducer;
