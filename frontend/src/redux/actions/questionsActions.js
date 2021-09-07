import axios from "axios";

const questionActions = {
  rouletteRender: () => {
    return (dispatch, getState) => {
      dispatch({ type: "RENDER_ROULETTE" });
    };
  },
  getQuestion: (category) => {
    console.log(category);
    return async (dispatch) => {
      try {
        let response = await axios.get(
          "https://benosy.herokuapp.com/api/question/" + category
        );
        return response.data.response;
      } catch (error) {
        console.log();
      }
    };
  },
};
export default questionActions;
