import axios from "axios";

const socketActions = {
  // reFetchGameRequests: () => {
  //   return async (dispatch) => {
  //     try {
  //     } catch (error) {
  //       toast.error(
  //         error.message.includes("User") ? error.message : "Session expired",
  //         {
  //           position: "top-right",
  //           style: {
  //             borderRadius: "10px",
  //             background: "#453ab7",
  //             color: "#fff",
  //             fontFamily: "Ubuntu, sans-serif",
  //           },
  //         }
  //       );
  //       return dispatch({ type: "LOG_OUT" });
  //     }
  //   };
  // },
  // startGame: () => {
  //   return async (dispatch) => {
  //     try {
  //     } catch (error) {
  //       toast.error(
  //         error.message.includes("User") ? error.message : "Session expired",
  //         {
  //           position: "top-right",
  //           style: {
  //             borderRadius: "10px",
  //             background: "#453ab7",
  //             color: "#fff",
  //             fontFamily: "Ubuntu, sans-serif",
  //           },
  //         }
  //       );
  //       return dispatch({ type: "LOG_OUT" });
  //     }
  //   };
  // },
  // reFetchCurrentPlayer: () => {
  //   return async (dispatch) => {
  //     try {
  //     } catch (error) {
  //       toast.error(
  //         error.message.includes("User") ? error.message : "Session expired",
  //         {
  //           position: "top-right",
  //           style: {
  //             borderRadius: "10px",
  //             background: "#453ab7",
  //             color: "#fff",
  //             fontFamily: "Ubuntu, sans-serif",
  //           },
  //         }
  //       );
  //       return dispatch({ type: "LOG_OUT" });
  //     }
  //   };
  // },
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
      console.log("action setFL");
      try {
        let response = await axios.get(
          "https://benosy.herokuapp.com/api/user/friend_list",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        if (!response.data.success) throw new Error();
        console.log("success true");
        console.log(response.data);
        return dispatch({
          type: "SET_FRIENDS_LIST",
          payload: response.data.friends_list,
        });
      } catch (error) {
        console.error(error);
      }
    };
  },
};
export default socketActions;
