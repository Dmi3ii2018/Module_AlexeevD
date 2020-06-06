export const TemplateActionType = {
    GET_TEMPLATE_REQUEST: 'GET_TEMPLATE_REQUEST',
    GET_TEMPLATE_SUCCESS: 'GET_TEMPLATE_SUCCESS',
    GET_TEMPLATE_ERROR: 'GET_TEMPLATE_ERROR',
    SET_NEW_TEMPLATE: 'SET_NEW_TEMPLATE',
    SET_SUCCESS_MESSAGE: 'SET_SUCCESS_MESSAGE',
    FETCH_TEMPLATE: 'FETCH_TEMPLATE',
    SET_CHOSEN_TEMPLATE: 'SET_CHOSEN_TEMPLATE'
}

export const TemplateActionCreator = {
    getTemplateRequest: () => ({
        type: TemplateActionType.GET_TEMPLATE_REQUEST
    }),
    getTemplateSuccess: (payload) => ({
        type: TemplateActionType.GET_TEMPLATE_SUCCESS,
        payload,
    }),
    getTemplateError: () => ({
        type: TemplateActionType.GET_TEMPLATE_ERROR,
    }),
    setNewTemplate: (payload) => ({
        type: TemplateActionType.SET_NEW_TEMPLATE,
        payload,
    }),
    fetchTemplate: (payload) => ({
        type: TemplateActionType.FETCH_TEMPLATE,
        payload,
    }),
    setSuccessMessage: (payload) => ({
        type: TemplateActionType.SET_SUCCESS_MESSAGE,
        payload,
    }),
    setChosenTemplae: (payload) => ({
        type: TemplateActionType.SET_CHOSEN_TEMPLATE,
        payload,
    })
}