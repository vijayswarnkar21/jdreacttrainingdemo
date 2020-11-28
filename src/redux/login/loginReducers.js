import { LOGIN_FAIL, LOGIN_SUCCESS } from "./loginTypes";

const user = JSON.parse(localStorage.getItem("user"));

const intialState = user ? { isLoggedIn: true, user,error:'' } : { isLoggedIn: false, user : null,error:''};

const loginReducer = (state = intialState, action) => {
    switch(action.type){
        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                error: action.payload
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                error: '',
                user: action.payload
            }
        default: 
            return state        
    }
}

export default loginReducer
