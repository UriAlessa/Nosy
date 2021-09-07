import axios from 'axios'

const gamesActions = {
    createGame: (token, username = null) => {
        return async (dispatch, getState) => {
            let response = await axios.post('http://localhost:4000/api/game/newgame', username, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            if (response.data.success) {
                return response.data.success
            }
            throw new Error()
        }
    }
}
export default gamesActions