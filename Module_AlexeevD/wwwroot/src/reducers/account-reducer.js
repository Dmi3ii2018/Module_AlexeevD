import { AccountActionType } from '../actions/account-actions';

const initialState = {
    displayedAccountId: 0,
    accounts: [],
    error: null,
    loading: false,
}

export const accountReducer = (state = initialState, action) => {
    switch(action.type) {
        case AccountActionType.ACCOUNT_FETCH:
            return Object.assign({}, state, {
                loading: true,
            });
        case AccountActionType.ACCOUNT_GET_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                accounts: action.payload,
            });
        case AccountActionType.ACCOUNT_GET_ERROR:
            return Object.assign({}, state, {
                loading: false,
                error: action.payload
            })
        case AccountActionType.ACCOUNT_SET_DISPLAYED:
            return Object.assign({}, state, {
                displayedAccountId: actionPayload
            });
        default:
            return state;

    }
}