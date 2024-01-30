import AuthActionTypes from "./authTypes";


const INITIAL_STATE = {
    data: null,
    loading: false,
    success: false,
    user: null,
    error: null
}


const AuthReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case AuthActionTypes.SIGN_IN:
            return {
                ...state,
                loading: true,
                success: false,
                error: null
            };
        case AuthActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                data: action.payload.data,
                error: null
            };
        case AuthActionTypes.SIGN_IN_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                error: action.error
            };
        case AuthActionTypes.LOGOUT:
            return {
                ...state,
                data: null,
                loading: false,
                success: false,
                error: null
            };
        default:
            return state
    }
}

export default AuthReducer