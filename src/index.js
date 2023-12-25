import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import Main from "./components/app/app";
import { createStore } from "redux";
import reducer from "./reducer";

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducer);

root.render(
    <Provider store={store}>
        <Main></Main>
    </Provider>
);



