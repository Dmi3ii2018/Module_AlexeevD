import { UserActionType as actions } from '../actions/userActions';

const initialState = {
    user: {},
    isAuthorized: false,
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
                isAuthorized: true,
            });
        case actions.GET_USER_ERROR:
            return Object.assign({}, state, {
                loading: false,
                isAuthorized: false,
                errorMessage: action.payload,
            });
            case actions.SET_ERROR:
                return Object.assign({}, state, {
                    errorMessage: action.payload,
                })
        default:
            return state;
    }
}