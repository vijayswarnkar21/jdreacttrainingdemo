import {
    USER_LITSV3_SUCCESS,
    USER_LITSV3_FAIL,
    USER_LITSV3_LOADMORE,
    USER_LITSV3_SCROLL
} from "./UserListV3Types";

import UserService from "../../services/user-service";

export const fetchUserListV3Success = (userList) => {
    return {
        type: USER_LITSV3_SUCCESS,
        payload: userList

    }
}

export const fetchUserListV3Fail = (error) => {
    return {
        type: USER_LITSV3_FAIL,
        payload: error 
    }
}

export const userLitsV3Loadmore = (currentPage) => {
    return {
        type: USER_LITSV3_LOADMORE,
        payload: currentPage 
    }
}

export const userLitsv3Scroll = (scrollerycordinate) => {
    return {
        type: USER_LITSV3_SCROLL,
        payload: scrollerycordinate 
    }
}

export const fetchUserListV3 = () => {
    return (dispatch) => {
        return UserService.getUsers().then(
            (response) => {
                if(response.data.success){
                    dispatch(fetchUserListV3Success(response.data.data));
                } else {
                    dispatch(fetchUserListV3Fail(response.data.message));
                }
            }
        ).catch(error => {
            dispatch(fetchUserListV3Fail(error.message || "somthing went wrong"));
        })
    }
}