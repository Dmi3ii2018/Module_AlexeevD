export const UserActionType = {
    GET_USER_REQUEST: 'GET_USER_REQUEST',
    GET_USER_SUCCESS: 'GET_USER_SUCCESS',
    GET_USER_ERROR: 'GET_USER_ERROR',
    SET_ERROR: 'SET_ERROR',

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
    },
    setError: (payload) => {
        return {
            type: UserActionType.SET_ERROR,
            payload
        }
    }
}