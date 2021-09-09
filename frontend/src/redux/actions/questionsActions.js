import axios from "axios";

const questionActions = {
  rouletteRender: () => {
    return (dispatch, getState) => {
      dispatch({ type: "RENDER_ROULETTE" });
    };
  },
  getQuestion: (category) => {
    return async (dispatch) => {
      try {
        let response = await axios.get(
          "https://benosy.herokuapp.com/api/question/" + category
        );
        return response.data.response;
      } catch (error) {
        alert("network error");
      }
    };
  },
};
export default questionActions;
