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
  updateQuestion: () => {
    return async () => {
      let response = await axios.put();
    };
  },
  createQuestion: (newQuestion) => {
    return async () => {
      let response = await axios.post(
        "https://benosy.herokuapp.com/api/admin/questions",
        newQuestion
      );
      return response;
    };
  },
  deleteQuestion: () => {
    return async () => {};
  },
};
export default questionActions;
