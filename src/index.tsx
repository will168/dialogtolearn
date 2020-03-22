import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import IndexReducer from "./reducers/index-reducer";
import AppContainer from "./components/app-container";

import "./css/kanban.scss";



const store = createStore(IndexReducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById("app")
);
