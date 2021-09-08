import axios from "axios";

const adminUsersActions = {
  getUsers: () => {
    let token = localStorage.getItem("token");
    return async () => {
      console.log(process.env.SECRETORKEY);
      let response = await axios.get("http://localhost:4000/api/admin/user", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      return response;
    };
  },
  updateUser: () => {
    let token = localStorage.getItem("token");
    return async () => {
      let response = await axios.put("http://localhost:4000/api/admin/user", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      return response;
    };
  },
};
export default adminUsersActions;
