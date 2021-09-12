import axios from "axios";

const adminQuestionActions = {
  getQuestions: () => {
    return async (dispatch) => {
      let response = await axios.get(
        "https://benosy.herokuapp.com/api/admin/questions"
      );
      if (response.data.success) {
        dispatch({ type: "GET_QUESTIONS", payload: response.data.response });
        return response.data;
      }
    };
  },
  createQuestion: (newQuestion) => {
    return async (dispatch) => {
      let response = await axios.post(
        "https://benosy.herokuapp.com/api/admin/question/" + newQuestion.correctAnswer,
        newQuestion
      );
      console.log(response);
      if (response.data.success) {
        dispatch({ type: "ADD_QUESTION", payload: response.data.response });
        console.log("después del dispatch");
        return response.data;
      }
    };
  },
  updateQuestion: (editedQuestion) => {
    return async () => {
      let response = await axios.put(
        "https://benosy.herokuapp.com/question/id",
        editedQuestion
      );
    };
  },

  deleteQuestion: (id) => {
    return async () => {
      let response = await axios.delete(
        "https://benosy.herokuapp.com/api/admin/question/" + id
      );
      return response.data;
    };
  },
};
export default adminQuestionActions;
