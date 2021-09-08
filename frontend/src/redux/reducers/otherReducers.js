const otherReducer = (state = { menu: false }, action) => {
  switch (action.type) {
    case "SHOW_MENU":
      return {
        ...state,
        menu: action.payload,
      };
    default:
      return { ...state };
  }
};

export default otherReducer;
