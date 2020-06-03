import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { UserActionCreator } from '../actions/userActions';
import { NewUserActionCreator } from '../actions/newuser-actions';

export const useUserStore = () => {
    const dispatch = useDispatch();

    const user = useSelector(({ userReducer }) => userReducer.user);
    const isAuthorized = useSelector(({ userReducer }) => userReducer.isAuthorized);
    const isLoading = useSelector(({ userReducer }) => userReducer.loading);
    const userName = useSelector(({ userReducer }) => userReducer.user.name);
    const errorMessage = useSelector(({ userReducer }) => userReducer.errorMessage);
    const isNewUser = useSelector(({ newUserReducer }) => newUserReducer.isValidUser);
    const isNewUserLoading = useSelector(({ newUserReducer }) => newUserReducer.loading);

    const _logOut = useCallback(
        () => dispatch(UserActionCreator.logOut()),
        [dispatch]
    )

    const _getUserRequest = useCallback(
        (value) => dispatch(UserActionCreator.getUserRequest(value)),
        [dispatch]
    )

    const _resetUserError = useCallback(
        () => dispatch(UserActionCreator.setError(null)),
        [dispatch]
    )

    const _getNewUserError = useCallback(
        () => dispatch(NewUserActionCreator.getNewUserError()),
        [dispatch]
    )

    const _getNewUserRequest = useCallback(
        (value)  => dispatch(NewUserActionCreator.getNewUserRequest(value)),
        [dispatch]
    )

    return {
        user,
        userName,
        isNewUser,
        isAuthorized,
        errorMessage,
        isLoading,
        isNewUserLoading,
        logOut: _logOut,
        getUserRequest: _getUserRequest,
        resetUserError: _resetUserError,
        getNewUserError: _getNewUserError,
        getNewUserRequest: _getNewUserRequest,
    }
}