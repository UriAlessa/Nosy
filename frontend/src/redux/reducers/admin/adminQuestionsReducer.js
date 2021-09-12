const adminQuestionsReducer = (state = {
    questions: [],
    reload: []
}, action) => {
    switch (action.type) {
        case "GET_QUESTIONS":
            return {
                ...state,
                questions: action.payload,
            };
        case "ADD_QUESTION":
            return {
                ...state,
                questions: state.questions.push(action.payload)
            }
        case "RELOAD":
            return {
                ...state,
                reload: !state.reload
            }
        // case "DELETE_QUESTION":
        //     console.log('llego acá')
        //     return {
        //         ...state,
        //         users: state.users.filter((user) => {
        //             if (user._id !== action.payload) {
        //                 return user
        //             }
        //         })
        //     }
        default:
            return { ...state };
    }
};

export default adminQuestionsReducer;
