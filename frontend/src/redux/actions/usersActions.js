import axios from "axios";

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
      } catch (error) {
        alert("En action signUpUser" + error);
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
        response.data.success &&
          dispatch({ type: "LOG_IN_USER", payload: response.data });
        return response;
      } catch (error) {
        alert("En action signUpUser" + error);
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
      } catch (error) {
        return dispatch({ type: "LOG_OUT" });
      }
    };
  },
  logOutUser: () => {
    return (dispatch) => {
      dispatch({ type: "LOG_OUT" });
    };
  },
  setSocket: (socket) => {
    return (dispatch) => {
      dispatch({ type: "SET_SOCKET", payload: socket });
    };
  },
};

export default usersActions;
