import { USER_LITSV3_FAIL, USER_LITSV3_SUCCESS, USER_LITSV3_LOADMORE,USER_LITSV3_SCROLL } from "./UserListV3Types";

const intialState = {
    userList: [],
    error: '',
    currentPage: 1,
    scrollYCordinate: 0
}

const userListV3Reducer = (state = intialState, action) => {
    switch (action.type) {
        case USER_LITSV3_FAIL:
            return {
                ...state,
                error: action.payload,
                userList: [],
                currentPage: 1
            }

        case USER_LITSV3_SUCCESS:
            return {
                ...state,
                error: '',
                userList: action.payload,
                currentPage: 1
            }

        case USER_LITSV3_LOADMORE:
            return {
                ...state,
                currentPage: action.payload
            }

        case USER_LITSV3_SCROLL:
            return {
                ...state,
                scrollYCordinate: action.payload
            }

        default:
            return state
    }
}

export default userListV3Reducer
