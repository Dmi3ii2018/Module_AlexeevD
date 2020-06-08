import { FeedbackActionType } from "./feedback-actions";
import produce from 'immer';

const initialState = {
  messages: []
}

export const feedbackReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FeedbackActionType.ADD_MESSAGE:
        draft.messages.push(action.payload);
        return
    }
  })
