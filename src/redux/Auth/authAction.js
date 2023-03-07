import AuthActionTypes from "./authTypes";
import {serviceSignIn, serviceSignUp} from "./authService"


export const signIn = (params) => async (dispatch) =>{
    console.log("sudah masuk ke action auth");
    try{
        dispatch({
            type: AuthActionTypes.SIGN_IN
        })
        const data = await serviceSignIn(params)
        console.log("ieu data na", data)
        localStorage.setItem('@userLogin', JSON.stringify(data?.data))
        dispatch({
            type: AuthActionTypes.SIGN_IN_SUCCESS,
            payload:data
        })
        return {status: 'success'}
    }catch(error){
        dispatch({
            type: AuthActionTypes.SIGN_IN_FAILED,
            error
        })
        return {
            status: "error",
            message: error.message
        }
    }
}

export const signUp = (params) => async (dispatch) =>{
    console.log("sudah masuk ke action auth");
    try{
        dispatch({
            type: AuthActionTypes.SIGN_IN
        })
        const data = await serviceSignUp(params)
        console.log("ieu data na", data)
        dispatch({
            type: AuthActionTypes.SIGN_IN_SUCCESS,
            payload:data
        })
        return {status: 'success'}
    }catch(error){
        dispatch({
            type: AuthActionTypes.SIGN_IN_FAILED,
            error
        })
        return {
            status: "error",
            message: error.message
        }
    }
}