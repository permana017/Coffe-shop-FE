import AuthActionTypes from "./authTypes";


const INITIAL_STATE ={
    data:null,
    loading: false,
    success: false,
    user:null,
}


const AuthReducer = (state = INITIAL_STATE, action) =>{

    switch (action.type) {
        case AuthActionTypes.SIGN_IN:
            return{
                ...state,
                loading: true,
                success: false
            };
        case AuthActionTypes.SIGN_IN_SUCCESS:
            return{
                ...state,
                loading: true,
                success: false,
                data: action.payload.data,
            };
        case AuthActionTypes.SIGN_IN_FAILED:
            return{
                ...state,
                loading: false,
                success: false
            };
            case AuthActionTypes.LOGOUT:
                return{
                    ...state,
                    data:null,
                    loading: false,
                    success: false
                };
        default:
            return state
    }
}

export default AuthReducer