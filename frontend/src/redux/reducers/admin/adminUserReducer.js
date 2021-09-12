const adminUserReducer = (state = {
    users: [],
    reviews: []
}, action) => {
    switch (action.type) {
        case "GET_USERS":
            return {
                ...state,
                users: action.payload,
            };
        case "ADD_USER":
            return {
                ...state,
                users: state.users.push(action.payload)
            }
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter((user) => {
                    if (user._id !== action.payload) {
                        return user
                    }
                })
            }
        case "GET_REVIEWS":
            return {
                ...state,
                reviews: action.payload
            }
        default:
            return { ...state };
    }
};

export default adminUserReducer;
