import axios from "axios";

const adminUsersActions = {
  getUsers: () => {
    let token = localStorage.getItem("token");
    return async (dispatch) => {
      let response = await axios.get("https://benosy.herokuapp.com/api/admin/user", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (response.data.success) {
        dispatch({ type: "GET_USERS", payload: response.data.response });
        return response.data;
      }
    };
  },
  createUser: (user) => {
    let token = localStorage.getItem("token");
    return async (dispatch) => {
      let response = await axios.post(
        "https://benosy.herokuapp.com/api/admin/user",
        user,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.data.success) {
        await dispatch({ type: "ADD_USER", payload: response.data.response });
        return response.data;
      }
    };
  },
  updateUser: (newUser) => {
    let token = localStorage.getItem("token");
    return async (dispatch) => {
      let response = await axios.put(
        "https://benosy.herokuapp.com/api/admin/user",
        newUser,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.data.success) {
        await dispatch({ type: "DELETE_USER", payload: newUser });
        return response.data;
      }
    };
  },

  deleteUser: (userId) => {
    let token = localStorage.getItem("token");
    return async (dispatch) => {
      let response = await axios.delete(
        "https://benosy.herokuapp.com/api/admin/user/" + userId,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.data.success) {
        await dispatch({ type: "DELETE_USER", payload: userId });
        return response.data;
      }
    };
  },
  getReviews: () => {
    return async (dispatch) => {
      let response = await axios.get(
        "https://benosy.herokuapp.com/api/review"
      );
      if (response.data.success) {
        dispatch({ type: "GET_REVIEWS", payload: response.data.response });
        return response.data;
      }
    };
  },
};
export default adminUsersActions;
