export const UserActionType = {
    GET_USER_REQUEST: 'GET_USER_REQUEST',
    GET_USER_SUCCESS: 'GET_USER_SUCCESS',
    GET_USER_ERROR: 'GET_USER_ERROR', 

}

export const UserActionCreator = {
    getUserRequest: (payload) => {
        return {
            type: UserActionType.GET_USER_REQUEST,
            payload
        }
    },
    getUserSuccess: (payload) => {
        return {
            type: UserActionType.GET_USER_SUCCESS,
            payload
        }
    },
    getUserError: (payload) => {
        return {
            type: UserActionType.GET_USER_ERROR,
            payload
        }
    }
}