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
  logInLS: () => {
    return async (dispatch) => {
      let token = localStorage.getItem("token");
      try {
        let response = await axios.get("http://localhost:4000/api/user/token", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        dispatch({ type: "LOG_IN_USER", payload: { ...response.data, token } });
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
  setSocket: (socket) => {
    return (dispatch) => {
      dispatch({ type: "SET_SOCKET", payload: socket });
    };
  },
  getUsers: () => {
    return async () => {
      let response = await axios.get("http://localhost:4000/api/admin/user", {
        headers: {
          key: process.env.SECRETORKEY,
        },
      });
      return response;
    };
  },
  updateUser: () => {
    return async () => {
      let response = await axios.put("http://localhost:4000/api/admin/user", {
        headers: {
          key: process.env.SECRETORKEY,
        },
      });
      return response;
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
};

export default usersActions;
