import { LOGIN_FAIL, LOGIN_SUCCESS,LOGOUT } from "./loginTypes";

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
        case LOGOUT: 
            return {
                ...state,
                isLoggedIn: false,
                user: null
            }    
        default: 
            return state        
    }
}

export default loginReducer
    