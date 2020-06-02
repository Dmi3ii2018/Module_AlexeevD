import { NewUserActionType as actions } from '../actions/newuser-actions';
import produce from 'immer';

const initialState = {
  isValidUser: false,
  loading: false,
  errorMessage: null,
};

export const newUserReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actions.FETCH_NEW_USER:
        draft.loading = true;
        return

      case actions.GET_NEW_USER_SUCCESS:
        draft.isValidUser = true;
        draft.loading = false;
        return

      case actions.GET_NEW_USER_ERROR:
        draft.isValidUser = false;
        draft.loading = false;
        draft.errorMessage = action.payload;
        return
    }
  })
