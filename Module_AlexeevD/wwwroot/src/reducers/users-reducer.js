import { UserActionType as actions } from '../actions/userActions';

const initialState = {
    user: {},
    accounts: [],
    errorMessage: null,
    loading: false,
    displayedAccount: {},
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_USER_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });
        case actions.GET_USER_SUCCESS:
            return Object.assign({}, state, {
                user: action.payload,
                loading: false,
            })
        default:
            return state;
    }
}