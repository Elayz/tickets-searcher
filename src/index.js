import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import Main from "./components/app/app";
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import * as thunk from 'redux-thunk'

const root = ReactDOM.createRoot(document.getElementById('root'));

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;
const loggerMiddelware = store => next => action => {
    const res = next(action);
    return res;
}
const store = createStore(reducer, composeEnhancers(applyMiddleware(
    loggerMiddelware,
    thunk.thunk
)));

root.render(
    <Provider store={store}>
        <Main></Main>
    </Provider>
);




