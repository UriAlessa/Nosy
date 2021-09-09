const gameReducer = (state = { game: null, coins: null }, action) => {
  switch (action.type) {
    case "SET_GAME":
      return {
        ...state,
        game: action.payload.game,
        coins: action.payload.coins,
      };
    default:
      return { ...state };
  }
};

export default gameReducer;
