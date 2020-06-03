import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { UserActionCreator } from './userActions';
import { NewUserActionCreator } from '../newUser/newuser-actions';
import { createSelector } from 'reselect';

export const useUserStore = () => {
    const dispatch = useDispatch();

    const user = useSelector(createSelector(
        state => state.userReducer,
        userReducer => userReducer.user
    ));
    const isAuthorized = useSelector(createSelector(
        state => state.userReducer,
        userReducer => userReducer.isAuthorized
    ));
    const isLoading = useSelector(createSelector(
        state => state.userReducer,
        userReducer => userReducer.loading
    ));
    const userName = useSelector(createSelector(
        state => state.userReducer,
        userReducer => userReducer.user.name
    ));
    const errorMessage = useSelector(createSelector(
        state => state.userReducer,
        userReducer => userReducer.errorMessage
    ));
    const isNewUser = useSelector(createSelector(
        state => state.newUserReducer,
        newUserReducer => newUserReducer.isValidUser
    ));
    const isNewUserLoading = useSelector(createSelector(
        state => state.newUserReducer,
        newUserReducer => newUserReducer.loading
    ));

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