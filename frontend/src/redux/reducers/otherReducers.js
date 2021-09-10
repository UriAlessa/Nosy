const otherReducer = (state = { menu: false, playNow: false }, action) => {
  switch (action.type) {
    case "SHOW_MENU":
      return {
        ...state,
        menu: action.payload,
      };
    case "PLAY_NOW":
      return {
        ...state,
        playNow: action.payload,
      };
    default:
      return { ...state };
  }
};

export default otherReducer;
