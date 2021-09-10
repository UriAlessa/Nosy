import axios from "axios";

const adminUsersActions = {
  getUsers: () => {
    let token = localStorage.getItem("token");
    return async () => {
      let response = await axios.get(
        "http://localhost:4000/api/admin/user",
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
        "http://localhost:4000/api/admin/user",
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
    console.log(user)
    let token = localStorage.getItem("token");
    return async () => {
      let response = await axios.post(
        "http://localhost:4000/api/admin/user",
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
        "http://localhost:4000/api/admin/user",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
          id: userId
        }
      );
      console.log(response)
      return response.data;
    };
  },
};
export default adminUsersActions;
