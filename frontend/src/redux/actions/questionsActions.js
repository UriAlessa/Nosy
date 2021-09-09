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
          "http://localhost:4000/api/question/" + category
        );
        return response.data.response;
      } catch (error) {
        console.log();
      }
    };
  },
};
export default questionActions;
