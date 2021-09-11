import axios from "axios";
import { toast } from "react-hot-toast";

const usersActions = {
  signUpUser: (newUser) => {
    return async (dispatch) => {
      try {
        let response = await axios.post(
          "https://benosy.herokuapp.com/api/user/signup",
          {
            ...newUser,
          }
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
          {
            ...newUser,
          }
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
        if (!response.data.success) throw new Error(response.data.error);
        return dispatch({
          type: "SEND_FRIEND_REQUEST",
          payload: { username, friend_requests: response.data.friend_requests },
        });
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
        // return dispatch({ type: "LOG_OUT" });
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
        if (!response.data.success) throw new Error(response.data.error);
        return dispatch({
          type: "ACCEPT_FRIEND_REQUEST",
          payload: {
            username,
            friend_requests: response.data.friend_requests,
            friends: response.data.friends,
          },
        });
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
    return async (dispatch) => {
      let token = localStorage.getItem("token");
      try {
        let response = await axios.post(
          "https://benosy.herokuapp.com/api/game/newgame",
          { username },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );

        if (!response.data.success) throw new Error();
        return dispatch({
          type: "SEND_GAME_REQUEST",
          payload: username,
        });
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

  answerGameRequest: (username, accept, gameId) => {
    return async (dispatch) => {
      let token = localStorage.getItem("token");
      try {
        let response = await axios.put(
          "https://benosy.herokuapp.com/game/newgame",
          { username, accept, gameId },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        if (!response.data.success) throw new Error();
        dispatch({
          type: "ANSWER_GAME_REQUEST",
          payload: username,
        });
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
    return async (dispatch) => {
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
      try {
        let res = await axios.put(
          "https://benosy.herokuapp.com/api/user/logout",
          {},
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        if (!res.data.success) throw new Error();
        dispatch({ type: "LOG_OUT" });
      } catch (error) {
        console.error(error);
      }
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

  postNewReview: (newReview, token) => {
    return async () => {
      try {
        let response = await axios.post(
          `https://benosy.herokuapp.com/api/review`,
          {
            ...newReview,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        if (response.data.success) {
          return { success: true, response: response.data.response };
        } else {
          return { success: false, response: response.data.response };
        }
      } catch (err) {
        return { success: false, response: err.message };
      }
    };
  },

  getReviews: () => {
    return async () => {
      try {
        let response = await axios.get(
          "https://benosy.herokuapp.com/api/review"
        );
        if (response.data.success) {
          return { success: true, response: response.data.response };
        } else {
          return { success: false, response: response.data.response };
        }
      } catch (error) {
        return { success: false, response: error.message };
      }
    };
  },

  setEmoji: (emoji) => {
    return async (dispatch) => {
      const token = localStorage.getItem("token");
      try {
        let response = await axios.put(
          `https://benosy.herokuapp.com/api/user/emoji`,
          { emoji },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        if (!response.data.success) throw new Error();
        dispatch({ type: "LOG_IN_USER", payload: { ...response.data, token } });
        return response.data;
      } catch (err) {
        return { success: false, response: err.message };
      }
    };
  },
  searchUser: (username, token) => {
    return async () => {
      try {
        let response = await axios.post(
          "https://benosy.herokuapp.com/api/user/add_friend",
          { username },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        if (!response.data.success) throw new Error(response.data.response);
        let user = {
          username: response.data.response.username,
          avatar: response.data.response.avatar,
        };
        return user;
      } catch (error) {
        console.log(error);
      }
    };
  },
};

export default usersActions;
