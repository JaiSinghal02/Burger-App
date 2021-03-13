import * as actionTypes from '../actions/action'

const initState={
    authId: null,
    userId: null,
    logOut:false,
    isBurgerBuilt:false,
    ingredients: []
}

const reducer=(state=initState,action)=>{
    switch(action.type){
        case actionTypes.SET_AUTH_ID:
            return {
                ...state,
                authId: action.authId,
                userId: action.userId,
                logOut:false
            }
        case actionTypes.USER_LOGOUT:
            localStorage.removeItem('authId');
            return {
                ...state,
                authId: null,
                userId: null,
                logOut:true,
                isBurgerBuilt: false,
                ingredients: []
            }
        case actionTypes.IS_BURGER_BUILT:
            return{
                ...state,
                isBurgerBuilt:true,
                ingredients: state.ingredients.concat(action.ing)
            }
        case actionTypes.SET_LOGOUT_FALSE:
            return{
                ...state,
                logOut:false
            }

        default:
            return state
    }
};


export default reducer;