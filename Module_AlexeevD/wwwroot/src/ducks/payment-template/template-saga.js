import { put, call, takeEvery } from 'redux-saga/effects';
import {  TemplateActionType, TemplateActionCreator } from './template-actions';
import { createTemplate } from './template-fetch';

function* createTemplates(action) {
 try {
    const templateResponse = yield call(createTemplate, action.payload);
    yield console.log(templateResponse);
    if (templateResponse.status === 200) {
        yield put(TemplateActionCreator.setSuccessMessage(templateResponse.data.successText));
        yield put(TemplateActionCreator.setNewTemplate(action.payload));
    }
 } catch(error) {
    console.log(error);
    yield put(TemplateActionCreator.getTemplateError());
 }
}

export function* createTemplatesSaga() {
    yield takeEvery(TemplateActionType.FETCH_TEMPLATE, createTemplates);
}