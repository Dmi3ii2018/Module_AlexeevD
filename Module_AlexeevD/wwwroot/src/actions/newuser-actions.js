export const NewUserActionType = {
    GET_NEW_USER_REQUEST: 'GET_NEW_USER_REQUEST',
    GET_NEW_USER_SUCCESS: 'GET_NEW_USER_SUCCESS',
    GET_NEW_USER_ERROR: 'GET_NEW_USER_ERROR',
    SET_NEW_USER_ERROR: 'SET_NEW_USER_ERROR',
    FETCH_NEW_USER: 'FETCH_NEW_USER',
}

export const NewUserActionCreator = {
    getNewUserRequest: (payload) => {
        return {
            type: NewUserActionType.GET_NEW_USER_REQUEST,
            payload,
        }
    },
    fetchNewUser: () => {
        return {
            type: NewUserActionType.FETCH_NEW_USER,
        }
    },
    getNewUserSuccess: () => {
        return {
            type: NewUserActionType.GET_NEW_USER_SUCCESS
        }
    },
    getNewUserError: (payload) => {
        return {
            type: NewUserActionType.GET_NEW_USER_ERROR,
            payload
        }
    },
    setNewUserError: (payload) => {
        return {
            type: NewUserActionType.SET_NEW_USER_ERROR,
            payload
        }
    }
}