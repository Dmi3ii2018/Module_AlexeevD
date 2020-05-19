export const AccountActionType = {
    ACCOUNT_FETCH: 'ACCOUNT_FETCH',
    ACCOUNT_GET_SUCCESS: 'ACCOUNT_GET_SUCCESS',
    ACCOUNT_GET_ERROR: 'ACCOUNT_GET_ERROR',
    ACCOUNT_SET_DISPLAYED: 'ACCOUNT_SET_DISPLAYED',
    ACCOUNT_GET_REQUEST: 'ACCOUNT_GET_REQUEST',
}

export const AccountActionCreator = {
    accountFetch: (payload) => {
        return {
            type: AccountActionType.ACCOUNT_FETCH,
            payload
        }
    },
    accountGetSuccess: (payload) => {
        return {
            type: AccountActionType.ACCOUNT_GET_SUCCESS,
            payload
        }
    },
    accountGetError: (payload) => {
        return {
            type: AccountActionType.ACCOUNT_GET_ERROR,
            payload
        }
    },
    accountSetDisplayed: (payload) => {
        return {
            type: AccountActionType.ACCOUNT_SET_DISPLAYED,
            payload
        }
    }

}