import axios from 'axios'

const gamesActions = {
    createSingleGame: () => {
        return async (dispatch, getState) => {
            let response = await axios.post('http://localhost:4000/game/newGame')
            if (response.data.success) {
                // dispatch({ type: "CREATE_GAME", payload: null })
                return response.data.response
            }
            throw new Error()
        }
    }
}
export default gamesActions