import axios from "axios";

const adminUsersActions = {
  getUsers: () => {
    let token = localStorage.getItem("token");
    return async () => {
      let response = await axios.get(
        "https://benosy.herokuapp.com/api/admin/user",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      return response;
    };
  },
  updateUser: (newUser) => {
    let token = localStorage.getItem("token");
    return async () => {
      let response = await axios.put(
        "https://benosy.herokuapp.com/api/admin/user",
        newUser,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      return response.data;
    };
  },
  createUser: (user) => {
    console.log(user);
    let token = localStorage.getItem("token");
    return async () => {
      let response = await axios.post(
        "https://benosy.herokuapp.com/api/admin/user",
        user,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      return response.data;
    };
  },
  deleteUser: (userId) => {
    let token = localStorage.getItem("token");
    return async () => {
      let response = await axios.delete(
        "https://benosy.herokuapp.com/api/admin/user",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
          id: userId,
        }
      );
      console.log(response);
      return response.data;
    };
  },
};
export default adminUsersActions;
