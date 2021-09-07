const initialState = {
  username: null,
  avatar: null,
  socket: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN_USER":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        username: action.payload.user.username,
        avatar: action.payload.user.avatar,
      };
    case "LOG_OUT":
      localStorage.removeItem("token");
      return {
        username: null,
        avatar: null,
      };
    case "SET_SOCKET":
      return {
        ...state,
        socket: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
