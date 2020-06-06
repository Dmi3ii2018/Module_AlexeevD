import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { createSelector } from 'reselect';
import { TemplateActionCreator, TemplateActionType } from './template-actions';


export const useTemplateStore = () => {
    const dispatch  = useDispatch();

    const isLoading = useSelector(createSelector(
        state => state.templateReducer,
        templateReducer => templateReducer.isLoading
    ))

    const templates = useSelector(createSelector(
        state => state.templateReducer,
        templateReducer => templateReducer.templates
    ))

    const successMessage = useSelector(createSelector(
        state => state.templateReducer,
        templateReducer => templateReducer.successMessage
    ))

    const chosenTemplate = useSelector(createSelector(
        state => state.templateReducer,
        templateReducer => templateReducer.chosenTemplate
    ))

    const _createTemplate = useCallback(
        (values) => dispatch(TemplateActionCreator.fetchTemplate(values)),
        [dispatch]
    )

    const _chooseAnotherTemplate = useCallback(
        (temp) => dispatch(TemplateActionCreator.setChosenTemplae(temp)),
        [dispatch]
    )

    return {
        isLoading,
        templates,
        successMessage,
        chosenTemplate,
        createTemplate: _createTemplate,
        chooseAnotherTemplate: _chooseAnotherTemplate,
    }
}