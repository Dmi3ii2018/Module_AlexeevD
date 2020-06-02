export const NewUserActionType = {
  GET_NEW_USER_REQUEST: 'GET_NEW_USER_REQUEST',
  GET_NEW_USER_SUCCESS: 'GET_NEW_USER_SUCCESS',
  GET_NEW_USER_ERROR: 'GET_NEW_USER_ERROR',
  FETCH_NEW_USER: 'FETCH_NEW_USER',
};

export const NewUserActionCreator = {
  getNewUserRequest: (payload) => ({
    type: NewUserActionType.GET_NEW_USER_REQUEST,
    payload,
  }),
  fetchNewUser: () => ({
    type: NewUserActionType.FETCH_NEW_USER,
  }),
  getNewUserSuccess: () => ({
    type: NewUserActionType.GET_NEW_USER_SUCCESS,
  }),
  getNewUserError: (payload) => ({
    type: NewUserActionType.GET_NEW_USER_ERROR,
    payload,
  }),
};
