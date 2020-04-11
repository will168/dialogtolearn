import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {createStore} from "redux";
import indexReducer from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import App from "./components/App";


const store = createStore(
    indexReducer, composeWithDevTools()
);
const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, rootElement);
