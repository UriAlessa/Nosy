import axios from "axios";
import { toast } from "react-hot-toast";

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
    let token = localStorage.getItem("token");
    return async () => {
      let response = await axios.put(
        "http://localhost:4000/admin/user",
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
};
export default adminUsersActions;
