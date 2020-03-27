import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import messagesReducer from "./reducers/messages";
import Monitor from "./components/MonitorContainer";
import {composeWithDevTools} from "redux-devtools-extension";
import Sheet from "./components/Sheet";
import Grid from "@material-ui/core/Grid";

const store = createStore(
  combineReducers({

    records: messagesReducer
  }), composeWithDevTools()
);

function App() {

  return (
    <Provider store={store}>
      <div>
          <Grid container>
              <Grid item xs={9}>

                  <Sheet/>
              </Grid>
              <Grid item xs={3}>
                  <Monitor />
              </Grid>
          </Grid>
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
