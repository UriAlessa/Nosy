import axios from 'axios'

const usersActions = {
    signUpUser: (newUser) => {
        return async (dispatch) => {
            let response = await axios.post('endpoint')
            if (!response.data.success) throw new Error()
            dispatch({ type: 'LOG_IN_USER', payload: response.data.response })
        }
    },
    logInUser: () => {
        return (dispatch) => {

        }
    },
    logInLS: () => {
        return (dispatch) => {

        }
    },
    logOutUser: () => {
        return (dispatch) => {

        }
    },


}

module.exports = usersActions