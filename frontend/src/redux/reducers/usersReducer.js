import io from "socket.io-client";

const initialState = {
  token: null,
  username: null,
  avatar: null,
  socket: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN_USER":
      localStorage.setItem("token", action.payload.token);
      return {
        token: action.payload.token,
        username: action.payload.user.username,
        avatar: action.payload.user.avatar,
        socket: io("http://localhost:4000/", {
          query: "token=" + action.payload.token,
        }),
      };
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
