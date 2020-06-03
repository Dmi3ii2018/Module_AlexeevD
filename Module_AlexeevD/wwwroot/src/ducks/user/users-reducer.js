import { UserActionType as actions } from './userActions';
import produce from 'immer';

const initialState = {
  user: {},
  id: null,
  isAuthorized: false,
  errorMessage: null,
  loading: false,
  displayedAccount: {},
};

export const userReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actions.GET_USER_REQUEST:
        draft.loading = true
        return

      case actions.GET_USER_SUCCESS:
        draft.user = action.payload;
        draft.id = action.payload.id;
        draft.loading = false;
        draft.isAuthorized = true;
        return

      case actions.GET_USER_ERROR:
        draft.loading = false;
        draft.isAuthorized = false;
        return

      case actions.SET_ERROR:
        draft.errorMessage = action.payload
        return

      case actions.LOG_OUT:
        return initialState;
    }
  })

