import { combineReducers } from 'redux';
import loginReducer from './login/loginReducers';
import userListReducer from "./userList/userListReducers";
import userListV3Reducer from "./userlistv3/UserListv3Reducer";

const rootReducer = combineReducers({
    user : loginReducer,
    userList: userListReducer,
    userListv3 : userListV3Reducer
})

export default rootReducer