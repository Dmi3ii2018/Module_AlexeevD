import React from 'react';
import { render } from 'react-dom';
import { App } from './components/app.jsx';
import { rootReducer } from './reducers/root-reducer';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
// import { compose } from "recompose";
import rootSaga from './sagas/root-saga';
import { createAPI } from './api/axios';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export const api = createAPI((...args) => store.dispatch(...args));

render(
    <Provider store={store}>
        <App />
    </ Provider>,
    document.getElementById('root')
)