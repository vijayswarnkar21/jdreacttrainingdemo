import {
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from "./loginTypes";
import AuthService from "../../services/auth-service";

export const loginSucecss = (user) => {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
}

export const loginFailure = (error) => {
    return {
        type: LOGIN_FAIL,
        payload: error
    }
}




export const authenticate = (username, password) => {
    return (dispatch) => {
        return AuthService.authenticate(username, password).then(
            (data) => {
                dispatch(loginSucecss(data));
            })
            .catch(error => {
                dispatch(loginFailure(error.message))
            })
    }
}