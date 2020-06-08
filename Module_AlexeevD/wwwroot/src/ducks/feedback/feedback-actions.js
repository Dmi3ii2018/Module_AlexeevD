export const FeedbackActionType = {
  ADD_MESSAGE: 'ADD_MESSAGE',
}

export const FeedbackActionCreator = {
  addMessage: (payload) => ({
    type: FeedbackActionType.ADD_MESSAGE,
    payload,
  })
}
