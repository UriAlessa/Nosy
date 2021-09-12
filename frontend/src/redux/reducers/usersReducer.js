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
    case "SET_FRIEND_REQUESTS":
      return {
        ...state,
        userData: {
          ...state.userData,
          friend_requests: action.payload.friend_requests,
        },
      };
    case "SET_FRIENDS":
      return {
        ...state,
        userData: {
          ...state.userData,
          friend_requests: action.payload.friend_requests,
          friends: action.payload.friends,
        },
      };
    case "SET_FRIENDS_LIST":
      return {
        ...state,
        userData: {
          ...state.userData,
          friends: action.payload,
        },
      };
    case "SET_GAME_REQUESTS":
      return {
        ...state,
        userData: {
          ...state.userData,
          game_requests: action.payload.game_requests,
          playing_now: action.payload.playing_now,
        },
      };
    case "SEND_FRIEND_REQUEST":
      state.socket.emit("friend_request", {
        username: action.payload.username,
        requests: action.payload.friend_requests.invitated,
      });
      return {
        ...state,
        userData: {
          ...state.userData,
          friend_requests: action.payload.friend_requests.invitator,
        },
      };
    case "ACCEPT_FRIEND_REQUEST":
      state.socket.emit("accepted_friend_request", {
        username: action.payload.username,
        requests: action.payload.friend_requests.invitator,
        friends: action.payload.friends.invitator,
      });
      return {
        ...state,
        userData: {
          ...state.userData,
          friend_requests: action.payload.friend_requests.invitated,
          friends: action.payload.friends.invitated,
        },
      };
    case "DECLINE_FRIEND_REQUEST":
      console.log(action.payload);
      return {
        ...state,
        userData: {
          ...state.userData,
          friend_requests: action.payload.friend_requests.invitated,
        },
      };
    case "SEND_GAME_REQUEST":
      state.socket.emit("game_request", {
        username: action.payload.username,
        requests: action.payload.game_requests.invitated,
      });
      return {
        ...state,
        userData: {
          ...state.userData,
          game_requests: action.payload.game_requests.invitator,
        },
      };
    case "ACCEPT_GAME_REQUEST":
      console.log(action.payload);
      state.socket.emit("accepted_game_request", {
        username: action.payload.username,
        requests: action.payload.game_requests.invitator,
        playing_now: action.payload.playing_now.invitator,
        game: action.payload.game,
        coins: action.payload.coins,
      });
      return {
        ...state,
        userData: {
          ...state.userData,
          game_requests: action.payload.game_requests.invitated,
          playing_now: action.payload.playing_now.invitated,
        },
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
