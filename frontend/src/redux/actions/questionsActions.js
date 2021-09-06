const questionActions={
    rouletteRender : ()=>{
        return (dispatch,getState)=>{
            dispatch({type:"RENDER_ROULETTE"})
        }
    }
}
export default questionActions