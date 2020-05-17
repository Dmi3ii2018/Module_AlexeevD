import { NewUserActionType as actions } from '../actions/newuser-actions';

const initialState = {
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
                loading: false,
            });
        case actions.GET_NEW_USER_ERROR:
            return Object.assign({}, state, {
                loading: false,
                errorMessage: action.payload,
            });
            case actions.SET_NEW_USER_ERROR:
                return Object.assign({}, state, {
                    errorMessage: action.payload,
                })
        default:
            return state;
    }
}