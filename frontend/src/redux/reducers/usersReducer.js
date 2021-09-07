const initialState = {
  token: null,
  username: null,
  avatar: null
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN_USER':
        console.log(action.payload)
        localStorage.setItem('token', action.payload.token)
        return {
            token: action.payload.token,
            username: action.payload.user.username,
            avatar: action.payload.user.avatar
        }
        default:
            return state
    case 'LOG_OUT':
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        localStorage.removeItem('avatar')
        return{
            token: null,
            username: null,
            avatar: null,
        }
    case "SET_SOCKET":
      return {
        ...state,
        socket: action.payload,
      }
  }
}

export default usersReducer
    