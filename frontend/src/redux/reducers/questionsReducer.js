const questionsReducer = (state = { render: false }, action) => {
    switch (action.type) {
        case 'RENDER_ROULETTE':
            return {
                ...state,
                render: !state.render
            }



        case 'lala':



        case 'lala':



        default:
            return { ...state }
    }
}

export default questionsReducer
