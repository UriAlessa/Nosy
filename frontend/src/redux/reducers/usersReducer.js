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
        socket: action.payload.socket,
      };
    case "LOG_OUT":
      localStorage.removeItem("token");
      return {
        initialState,
      };
    default:
      return state;
  }
};

export default usersReducer;
