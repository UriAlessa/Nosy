const otherActions = {
  showMenu: (boolean) => {
    return (dispatch, getState) => {
      dispatch({ type: "SHOW_MENU", payload: boolean });
    };
  },
  setPlayNow: (boolean) => {
    return (dispatch) => {
      dispatch({ type: "PLAY_NOW", payload: boolean });
    };
  },
};
export default otherActions;
