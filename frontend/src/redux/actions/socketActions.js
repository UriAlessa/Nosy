import { request } from "express";
import toast from "react-hot-toast";

const socketActions = {
  reFetchGameRequests: () => {
    return async (dispatch) => {
      try {
      } catch (error) {
        toast.error(
          error.message.includes("User") ? error.message : "Session expired",
          {
            position: "top-right",
            style: {
              borderRadius: "10px",
              background: "#453ab7",
              color: "#fff",
              fontFamily: "Ubuntu, sans-serif",
            },
          }
        );
        return dispatch({ type: "LOG_OUT" });
      }
    };
  },
  startGame: () => {
    return async (dispatch) => {
      try {
      } catch (error) {
        toast.error(
          error.message.includes("User") ? error.message : "Session expired",
          {
            position: "top-right",
            style: {
              borderRadius: "10px",
              background: "#453ab7",
              color: "#fff",
              fontFamily: "Ubuntu, sans-serif",
            },
          }
        );
        return dispatch({ type: "LOG_OUT" });
      }
    };
  },
  reFetchCurrentPlayer: () => {
    return async (dispatch) => {
      try {
      } catch (error) {
        toast.error(
          error.message.includes("User") ? error.message : "Session expired",
          {
            position: "top-right",
            style: {
              borderRadius: "10px",
              background: "#453ab7",
              color: "#fff",
              fontFamily: "Ubuntu, sans-serif",
            },
          }
        );
        return dispatch({ type: "LOG_OUT" });
      }
    };
  },
  setFriendRequests: (requests) => {
    return async (dispatch) => {
      dispatch({ type: "SET_FRIEND_REQUESTS", payload: requests });
      try {
      } catch (error) {
        toast.error(
          error.message.includes("User") ? error.message : "Session expired",
          {
            position: "top-right",
            style: {
              borderRadius: "10px",
              background: "#453ab7",
              color: "#fff",
              fontFamily: "Ubuntu, sans-serif",
            },
          }
        );
        return dispatch({ type: "LOG_OUT" });
      }
    };
  },
  setFriends: (requests, friends) => {
    return async (dispatch) => {
      try {
        dispatch({ type: "SET_FRIENDS", payload: { requests, friends } });
      } catch (error) {
        toast.error(
          error.message.includes("User") ? error.message : "Session expired",
          {
            position: "top-right",
            style: {
              borderRadius: "10px",
              background: "#453ab7",
              color: "#fff",
              fontFamily: "Ubuntu, sans-serif",
            },
          }
        );
        return dispatch({ type: "LOG_OUT" });
      }
    };
  },
};
export default socketActions;
