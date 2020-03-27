import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import messagesReducer from "./reducers/messages";
import Monitor from "./components/MonitorContainer";
import {composeWithDevTools} from "redux-devtools-extension";
import Sheet from "./components/Sheet";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import grey from "@material-ui/core/colors/grey";

const store = createStore(
  combineReducers({

    records: messagesReducer
  }), composeWithDevTools()
);
const useStyles = makeStyles({

    div: {
        background: grey[200],

    }
});
function App() {
    const classes = useStyles();
  return (
    <Provider store={store}>
      <div className={classes.div}>
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
