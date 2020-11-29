import { USER_LITS_FAIL, USER_LITS_SUCCESS } from "./userListTypes"

const intialState = {
    userList : [],
    error : ''
}

const userListReducer = (state = intialState, action) => {
    debugger;
    switch(action.type){
        case USER_LITS_FAIL:
            return {
                ...state,
                error: action.payload,
                userList: []
            }
        case USER_LITS_SUCCESS:
            return {
                ...state,
                error: '',
                userList: action.payload
            } 
        default: 
            return state        
    }
}

export default userListReducer
