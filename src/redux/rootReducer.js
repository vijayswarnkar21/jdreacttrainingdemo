import { combineReducers } from 'redux';
import loginReducer from './login/loginReducers';
import userListReducer from "./userList/userListReducers";

const rootReducer = combineReducers({
    user : loginReducer,
    userList: userListReducer
})

export default rootReducer