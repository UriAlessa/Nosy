import axios from "axios";
import { toast } from "react-hot-toast";

const usersActions = {
  signUpUser: (newUser) => {
    return async (dispatch) => {
      try {
        let response = await axios.post(
          "http://localhost:4000/api/user/signup",
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
          "http://localhost:4000/api/user/login",
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
          "http://localhost:4000/api/user/friend_request",
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
          "http://localhost:4000/api/user/friend_request",
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
          return { success: true, response: response.data.response};
        }else{
          return { success: false, response: response.data.response};
        }
      } catch (error) {
        return { success: false, response: error.message };
      }
    };
  },

  setEmoji:(ranking, token)=>{
    return async ()=>{
      try{
        let response = await axios.put(`http://localhost:4000/api/emoji`, { ranking },
        {
          headers: {
            Authorization: "Bearer " + token,
          },  
        });
        console.log(response)
        if (response.data.success) {
          return { response: response.data.response};
        } else {
          return { success: false};
        }
      } catch (err) {
        return { success: false, response: err.message };
      }
    };
  },

  getEmoji:(token)=>{
    return async ()=>{
      try{
        let response = await axios.put(`http://localhost:4000/api/emoji`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        console.log(response)
        if (response.data.success) {
          return { response: response.data.response};
        } else {
          return { success: response.data.response};
        }
      } catch (err) {
        return { success: false, response: err.message };
      }
    };
  },
};


export default usersActions;
