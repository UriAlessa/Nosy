import toast from "react-hot-toast";

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
};
export default socketActions;
