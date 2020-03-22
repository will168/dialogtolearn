import * as Immutable from "immutable";
import { connect } from "react-redux";
import * as SheetActions from "../actions/actions";

import App from "./app";

interface AppState {
    message: string;
    showMessage: any;
    date: any;
    from: any;
    to: any;
    subject: any
}

const mapStateToProps = (state: AppState) => state;
const mapDispatchToProps = (dispatch: any) => {
    return {
        showMessage: (message: string) =>
            dispatch(SheetActions.showMessage(message))
    };
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;
