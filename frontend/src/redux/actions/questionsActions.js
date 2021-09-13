import axios from "axios";

const questionActions = {
  rouletteRender: () => {
    return (dispatch, getState) => {
      dispatch({ type: "RENDER_ROULETTE" });
    };
  },
  getQuestion: (category, game) => {
    return async (dispatch) => {
      try {
        let response = await axios.post(
          "https://benosy.herokuapp.com/api/question/",
          { category, game }
        );
        return response.data.response;
      } catch (error) {
        alert("network error");
      }
    };
  },
};
export default questionActions;
