import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FeedbackActionCreator } from "./feedback-actions";
import { createSelector } from 'reselect';

export const useFeedbackStore = () => {
  const dispatch = useDispatch();

  const messages = useSelector(createSelector(
    state => state.feedbackReducer,
    feedbackReducer => feedbackReducer.messages,
  ))

  const _setMessage = useCallback(
    (message) => dispatch(FeedbackActionCreator.addMessage(message)),
    [dispatch]
  );

  return {
    messages,
    setMessage: _setMessage,
  }
}
