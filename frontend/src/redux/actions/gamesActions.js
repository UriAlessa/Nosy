import axios from "axios";

const gamesActions = {
  createGame: (token, username = null) => {
    return async (dispatch) => {
      let response = await axios.post(
        "http://localhost:4000/api/game/newgame",
        username,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (!response.data.success) {
        throw new Error();
      }
      const { game, coins } = response.data.response;
      dispatch({
        type: "SET_GAME",
        payload: { game, coins },
      });
    };
  },
  sendAnswer: (token, question, answer, nosy, powers_used, coins_spent) => {
    return async (dispatch) => {
      let response = await axios.put(
        "http://localhost:4000/api/game/answer",
        { question, answer, nosy, powers_used, coins_spent },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (!response.data.success) {
        throw new Error();
      }
      dispatch({
        type: "SET_GAME",
        payload: {
          statisticsUser: response.data.response.newUserState,
          game: response.data.response.newGameState,
          coins: response.data.response.newUserState.coins,
        },
      });
      console.log(response.data.response);
      console.log(response.data.response.newUserState);
      return response.data.response;
    };
  },
  setGame: (token) => {
    return async (dispatch) => {
      let response = await axios.get(
        "http://localhost:4000/api/game/current_game",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (!response.data.success) {
        throw new Error();
      }
      dispatch({
        type: "SET_GAME",
        payload: {
          game: response.data.response.game,
          coins: response.data.response.coins,
        },
      });
    };
  },
};
export default gamesActions;
