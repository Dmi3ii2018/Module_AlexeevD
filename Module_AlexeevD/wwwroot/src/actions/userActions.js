export const UserActionType = {
    GET_USER_REQUEST: 'GET_USER_REQUEST',
    GET_USER_SUCCESS: 'GET_USER_SUCCESS',
    GET_USER_ERROR: 'GET_USER_ERROR',
    SET_ERROR: 'SET_ERROR',
    LOG_OUT: 'LOG_OUT',
}

export const NewUserActionType = {
    GET_NEW_USER_REQUEST: 'GET_NEW_USER_REQUEST',
    GET_NEW_USER_SUCCESS: 'GET_NEW_USER_SUCCESS',
    GET_NEW_USER_ERROR: 'GET_NEW_USER_ERROR',
    SET_NEW_USER_ERROR: 'SET_NEW_USER_ERROR',
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
    getUserError: () => {
        return {
            type: UserActionType.GET_USER_ERROR
        }
    },
    setError: (payload) => {
        return {
            type: UserActionType.SET_ERROR,
            payload
        }
    },
    logOut: () => {
        return {
            type: UserActionType.LOG_OUT,
        }
    }
}