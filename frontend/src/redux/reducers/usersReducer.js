import io from "socket.io-client";

const initialState = {
  token: null,
  username: null,
  avatar: null,
  socket: null,
  userData: null,
};

const usersReducer = (state = initialState, action) => {
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
    case "LOG_OUT":
      localStorage.removeItem("token");
      state.socket.emit("disconnection");
      return {
        initialState,
      };
    case "SEND_FRIEND_REQUEST":
      state.socket.emit("friend_request", action.payload.username);
      break;
    case "ACCEPT_FRIEND_REQUEST":
      state.socket.emit("accepted_friend_request", action.payload.username);
      break;
    case "SEND_GAME_REQUEST":
      state.socket.emit("game_request", action.payload.username);
      break;
    case "ACCEPT_GAME_REQUEST":
      state.socket.emit("answer_game_request", action.payload.username);
      break;
    default:
      return state;
  }
};

export default usersReducer;
