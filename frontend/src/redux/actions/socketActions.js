import axios from "axios";
import { dispatch } from "react-hot-toast/dist/core/store";

const socketActions = {
  setFriendRequests: (requests) => {
    return (dispatch) => {
      dispatch({
        type: "SET_FRIEND_REQUESTS",
        payload: { friend_requests: requests },
      });
    };
  },
  setFriends: (requests, friends) => {
    return (dispatch) =>
      dispatch({
        type: "SET_FRIENDS",
        payload: { friend_requests: requests, friends },
      });
  },
  setGameRequests: (requests) => {
    return (dispatch) => {
      dispatch({
        type: "SET_GAME_REQUESTS",
        payload: { game_requests: requests },
      });
    };
  },
  setFriendsList: () => {
    return async (dispatch) => {
      let token = localStorage.getItem("token");
      try {
        let response = await axios.get(
          "http://localhost:4000/api/user/friend_list",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        if (!response.data.success) throw new Error();
        return dispatch({
          type: "SET_FRIENDS_LIST",
          payload: response.data.friends_list,
        });
      } catch (error) {
        console.error(error);
      }
    };
  },
  setGame: (game, coins) => {
    return (dispatch) => {
      dispatch({ type: "SET_GAME", payload: { game, coins } });
    };
  },
};
export default socketActions;
