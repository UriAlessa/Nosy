import axios from "axios";

const questionActions = {
  getQuestions: () => {
    return async () => {
      let response = await axios.get(
        "https://benosy.herokuapp.com/api/admin/questions"
      );
      return response;
    };
  },
};
export default questionActions;
