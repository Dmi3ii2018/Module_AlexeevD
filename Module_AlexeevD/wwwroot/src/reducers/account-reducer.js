import { AccountActionType } from '../actions/account-actions';

const initialState = {
    displayedAccountId: -1,
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
            const accounts = action.payload;

            return Object.assign({}, state, {
                loading: false,
                accounts,
            });
        case AccountActionType.ACCOUNT_GET_ERROR:
            return Object.assign({}, state, {
                loading: false,
                error: action.payload
            })
        case AccountActionType.ACCOUNT_SET_DISPLAYED:
            return Object.assign({}, state, {
                displayedAccountId: action.payload,
            });
        // case AccountActionType.ACCOUNT_PUT_FUND_REQUEST:
        //     return Object.assign({}, state, {
        //         putFundLoading: true,
        //     });;
        default:
            return state;

    }
}