import {
    USER_LITS_SUCCESS,
    USER_LITS_FAIL,
} from "./userListTypes";

import UserService from "../../services/user-service";

export const fetchUserListSuccess = (userList) => {
    return {
        type: USER_LITS_SUCCESS,
        payload: userList

    }
}

export const fetchUserListFail = (error) => {
    return {
        type: USER_LITS_FAIL,
        payload: error 
    }
}

export const fetchUserList = () => {
    return (dispatch) => {
        return UserService.getUsers().then(
            (response) => {
                if(response.data.success){
                    dispatch(fetchUserListSuccess(response.data.data));
                } else {
                    dispatch(fetchUserListFail(response.data.message));
                }
            }
        ).catch(error => {
            dispatch(fetchUserListFail(error.message || "somthing went wrong"));
        })
    }
}
