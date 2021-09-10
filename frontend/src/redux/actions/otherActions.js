const gamesActions = {
    showMenu: (boolean) => {
        return (dispatch, getState) => {
            dispatch({type: 'SHOW_MENU', payload: boolean})
        }
    }
}
export default gamesActions