import { TemplateActionType as actions } from './template-actions';
import produce from 'immer';

const initialState = {
    isLoading: false,
    templates: [],
    successMessage: '',
    chosenTemplate: null,
}

export const templateReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actions.GET_TEMPLATE_REQUEST:
        draft.isLoading = true;
        return
      case actions.GET_TEMPLATE_SUCCESS:
        draft.isLoading = false;
        draft.templates = action.payload;
        return
      case actions.SET_NEW_TEMPLATE:
        draft.successMessage = '';
        draft.templates.push(action.payload);
        return
      case actions.GET_TEMPLATE_ERROR:
        draft.isLoading = false;
        return
      case actions.SET_SUCCESS_MESSAGE:
        draft.successMessage = action.payload;
        return
      case actions.SET_CHOSEN_TEMPLATE:
        draft.chosenTemplate = action.payload;
        return
    }
  })