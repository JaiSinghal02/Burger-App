import * as actionTypes from '../actions/action'

const initState={
    authId: null,
    logOut:false
}

const reducer=(state=initState,action)=>{
    switch(action.type){
        case actionTypes.SET_AUTH_ID:
            return {
                ...state,
                authId: action.authId,
                logOut:false
            }
        case actionTypes.USER_LOGOUT:
            return {
                ...state,
                authId: null,
                logOut:true
            }
        

        default:
            return state
    }
};

export default reducer;