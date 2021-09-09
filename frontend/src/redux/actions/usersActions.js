import axios from "axios";
import { toast } from "react-hot-toast";

const usersActions = {
  signUpUser: (newUser) => {
    return async (dispatch) => {
      try {
        let response = await axios.post(
          "https://benosy.herokuapp.com/api/user/signup",
          { ...newUser }
        );
        response.data.success &&
          dispatch({ type: "LOG_IN_USER", payload: response.data });
        return response;
      } catch {
        toast.error("Something went wrong", {
          position: "top-right",
          style: {
            borderRadius: "10px",
            background: "#453ab7",
            color: "#fff",
            fontFamily: "Ubuntu, sans-serif",
          },
        });
      }
    };
  },
  logInUser: (newUser) => {
    return async (dispatch) => {
      try {
        let response = await axios.post(
          "https://benosy.herokuapp.com/api/user/login",
          { ...newUser }
        );
        if (response.data.success === false) {
          toast.error(response.data.error, {
            position: "top-right",
            style: {
              borderRadius: "10px",
              background: "#453ab7",
              color: "#fff",
              fontFamily: "Ubuntu, sans-serif",
            },
          });
        }
        response.data.success &&
          dispatch({ type: "LOG_IN_USER", payload: response.data });
        return response;
      } catch {
        toast.error("Something went wrong", {
          position: "top-right",
          style: {
            borderRadius: "10px",
            background: "#453ab7",
            color: "#fff",
            fontFamily: "Ubuntu, sans-serif",
          },
        });
      }
    };
  },
  addFriend: (username) => {
    return async (dispatch) => {
      let token = localStorage.getItem("token");
      try {
        let response = await axios.post(
          "https://benosy.herokuapp.com/api/user/friend_request",
          { username },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        if (response.data.success) {
          dispatch({
            type: "SEND_FRIEND_REQUEST",
            payload: { username },
          });
        } else {
          throw new Error(response.data.error);
        }
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
  answerFriendRequest: (accept, username) => {
    return async (dispatch) => {
      let token = localStorage.getItem("token");
      try {
        let response = await axios.put(
          "https://benosy.herokuapp.com/api/user/friend_request",
          { accept, username },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        if (response.data.success) {
          dispatch({
            type: "ANSWER_FRIEND_REQUEST",
            payload: { username },
          });
        }
        return false;
      } catch (error) {
        toast.error("Session expired", {
          position: "top-right",
          style: {
            borderRadius: "10px",
            background: "#453ab7",
            color: "#fff",
            fontFamily: "Ubuntu, sans-serif",
          },
        });
        return dispatch({ type: "LOG_OUT" });
      }
    };
  },
  sendGameRequest: (username) => {
    return (dispatch) => {
      dispatch({
        type: "SEND_GAME_REQUEST",
        payload: { username },
      });
    };
  },
  answerGameRequest: (username) => {
    return async (dispatch) => {
      dispatch({
        type: "ANSWER_GAME_REQUEST",
        payload: { username },
      });
    };
  },

  logInLS: () => {
    return async (dispatch) => {
      let token = localStorage.getItem("token");
      try {
        let response = await axios.get(
          "https://benosy.herokuapp.com/api/user/token",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        dispatch({
          type: "LOG_IN_USER",
          payload: { ...response.data, token },
        });
      } catch {
        toast.error("Session expired", {
          position: "top-right",
          style: {
            borderRadius: "10px",
            background: "#453ab7",
            color: "#fff",
            fontFamily: "Ubuntu, sans-serif",
          },
        });
        return dispatch({ type: "LOG_OUT" });
      }
    };
  },
  logOutUser: () => {
    return (dispatch, getState) => {
      toast("Hope to see you soon!", {
        icon: "👋",
        position: "top-right",
        style: {
          borderRadius: "10px",
          background: "#453ab7",
          color: "#fff",
          fontFamily: "Ubuntu, sans-serif",
        },
      });
      dispatch({ type: "LOG_OUT" });
    };
  },
  sendMail: (newUser) => {
    return async () => {
      let response = await axios.post("https://benosy.herokuapp.com/api/mail", {
        ...newUser,
      });
      return response;
    };
  },
};

export default usersActions;
