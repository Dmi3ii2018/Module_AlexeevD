export const AccountHistoryAction = {
    GET_ACCOUNT_HISTORY_REQUEST: 'GET_ACCOUNT_HISTORY_REQUEST',
    GET_ACCOUNT_HISTORY_SUCCESS: 'GET_ACCOUNT_HISTORY_SUCCESS',
    GET_ACCOUNT_HISTORY_ERROR: 'GET_ACCOUNT_HISTORY_ERROR',
    ACCOUNT_HISTORY_FETCH: 'ACCOUNT_HISTORY_FETCH',
}

export const AccountHistoryActionCreator = {
    getAccountHistoryFetch: () => {
        return {
            type: AccountHistoryAction.ACCOUNT_HISTORY_FETCH,
        }
    },
    getAccountHistorySuccess: (payload) => {
        return {
            type: AccountHistoryAction.GET_ACCOUNT_HISTORY_SUCCESS,
            payload
        }
    },
    getAccountHistoryError: (payload) => {
        return {
            type: AccountHistoryAction.GET_ACCOUNT_HISTORY_ERROR,
            payload
        }
    },
    getAccountHistoryRequest: (payload) => {
        return {
            type: AccountHistoryAction.GET_ACCOUNT_HISTORY_REQUEST,
            payload,
        }
    }
}