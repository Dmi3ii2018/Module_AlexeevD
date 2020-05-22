import { NewUserActionType as actions } from '../actions/newuser-actions';

const initialState = {
    isValidUser: false,
    loading: false,
    errorMessage: null
}

export const newUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_NEW_USER:
            return Object.assign({}, state, {
                loading: true,
            });
        case actions.GET_NEW_USER_SUCCESS:
            return Object.assign({}, state, {
                isValidUser: true,
                loading: false,
            });
        case actions.GET_NEW_USER_ERROR:
            return Object.assign({}, state, {
                isValidUser: false,
                loading: false,
                errorMessage: action.payload,
            });
        default:
            return state;
    }
}