import axios from "axios";

const adminUsersActions = {
  getUsers: () => {
    let token = localStorage.getItem("token");
    return async () => {
      console.log(process.env.SECRETORKEY);
      let response = await axios.get(
        "https://benosy.herokuapp.com/admin/user",
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
    console.log("llego");
    let token = localStorage.getItem("token");
    return async () => {
      let response = await axios.put(
        "https://benosy.herokuapp.com/admin/user",
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
};
export default adminUsersActions;
