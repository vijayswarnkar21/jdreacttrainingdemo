import { combineReducers } from 'redux';
import loginReducer from './login/loginReducers';


const rootReducer = combineReducers({
    user : loginReducer
})

export default rootReducer