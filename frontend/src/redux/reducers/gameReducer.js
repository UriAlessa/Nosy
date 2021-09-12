const gameReducer = (
  state = { game: null, coins: null, statisticsUser: null },
  action
) => {
  switch (action.type) {
    case "SET_GAME":
      return {
        ...state,
        statisticsUser: action.payload.statistics,
        game: action.payload.game,
        coins: action.payload.coins,
      };
    default:
      return state;
  }
};

export default gameReducer;
