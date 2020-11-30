import { USER_LITS_FAIL, USER_LITS_SUCCESS } from "./userListTypes"

const intialState = {
    userList : [],
    error : ''
}

const userListReducer = (state = intialState, action) => {
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

        // case USER_UPDATE_SUCCESS:{
        //     let updatedUserList = state.userList.map(x => {
        //         if(x.id == action.payload.id){
        //             return {
        //                 id : action.payload.id,
        //                 name : action.payload.name,
        //                 department : action.payload.department,
        //                 designation : action.payload.designation
        //             }
        //         }
        //         return x;
        //     });
        //     console.log("updatedUserList-------------------------------->",updatedUserList);
        //     return {
        //         ...state,
        //         error : '',
        //         userList : updatedUserList
        //     }
        // } 
        default: 
            return state        
    }
}

export default userListReducer
