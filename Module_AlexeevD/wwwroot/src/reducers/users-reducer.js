import { UserActionType as actions } from '../actions/userActions';

const initialState = {
    user: {},
    id: null,
    isAuthorized: false,
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
                id: action.payload.id,
                loading: false,
                isAuthorized: true,
            });
        case actions.GET_USER_ERROR:
            return Object.assign({}, state, {
                loading: false,
                isAuthorized: false,
            });
        case actions.SET_ERROR:
            return Object.assign({}, state, {
                errorMessage: action.payload,
            });
        case actions.LOG_OUT:
            return initialState;
        default:
            return state;
    }
}