import axios from "axios";

const gamesActions = {
  createGame: (token, username = null) => {
    return async (dispatch, getState) => {
      let response = await axios.post(
        "http://localhost:4000/api/game/newgame",
        username,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.data.success) {
        console.log(response.data.response);
        return response.data;
      }
      throw new Error();
    };
  },
  sendAnswer: (token, question, answer, nosy, powers_used, coins_spent) => {
    return async () => {
      let response = await axios.put(
        "http://localhost:4000/api/game/answer",
        { question, answer, nosy, powers_used, coins_spent },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.data.success) {
        console.log(response.data.response);
        return response.data.response;
      }
      throw new Error();
    };
  },
};
export default gamesActions;
