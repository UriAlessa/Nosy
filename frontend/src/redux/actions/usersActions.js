import axios from "axios";
import { toast } from "react-hot-toast";

const usersActions = {
  signUpUser: (newUser) => {
    return async (dispatch) => {
      try {
        let response = await axios.post(
          "http://localhost:4000/api/user/signup",
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
          "http://localhost:4000/api/user/login",
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
          "http://localhost:4000/api/user/friend_request",
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
          "http://localhost:4000/api/user/friend_request",
          { accept, username },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        if (!response.data.success) throw new Error(response.data.error);
        if (accept) {
          return dispatch({
            type: "ACCEPT_FRIEND_REQUEST",
            payload: {
              username,
              friend_requests: response.data.friend_requests,
              friends: response.data.friends,
            },
          });
        } else {
          return dispatch({
            type: "DECLINE_FRIEND_REQUEST",
            payload: { friend_requests: response.data.friend_requests },
          });
        }
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
          "http://localhost:4000/api/game/newgame",
          { username },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );

        if (!response.data.success) throw new Error();
        dispatch({
          type: "SEND_GAME_REQUEST",
          payload: { username, game_requests: response.data.game_requests },
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

  answerGameRequest: (accept, username, game_id) => {
    return async (dispatch) => {
      let token = localStorage.getItem("token");
      try {
        let response = await axios.put(
          "http://localhost:4000/api/game/newgame",
          { username, accept, game_id },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        if (!response.data.success) throw new Error();
        if (accept) {
          dispatch({
            type: "SET_GAME",
            payload: {
              game: response.data.game,
              coins: response.data.coins.invitated,
              statistics: null,
            },
          });
          return dispatch({
            type: "ACCEPT_GAME_REQUEST",
            payload: {
              username,
              playing_now: response.data.playing_now,
              game_requests: response.data.game_requests,
              game: response.data.game,
              coins: response.data.coins.invitator,
            },
          });
        } else {
          return dispatch({
            type: "DECLINE_GAME_REQUEST",
            payload: { game_requests: response.data.game_requests },
          });
        }
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
        // return dispatch({ type: "LOG_OUT" });
      }
    };
  },

  logInLS: () => {
    return async (dispatch) => {
      let token = localStorage.getItem("token");
      try {
        let response = await axios.get("http://localhost:4000/api/user/token", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
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
          "http://localhost:4000/api/user/logout",
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
      let response = await axios.post("http://localhost:4000/api/mail", {
        ...newUser,
      });
      return response;
    };
  },

  postNewReview: (newReview, token) => {
    return async () => {
      try {
        let response = await axios.post(
          `http://localhost:4000/api/review`,
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
        let response = await axios.get("http://localhost:4000/api/review");
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
          `http://localhost:4000/api/user/emoji`,
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
          "http://localhost:4000/api/user/add_friend",
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
