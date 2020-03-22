import * as Immutable from "immutable";
import { connect } from "react-redux";
import * as SheetActions from "../actions/actions";
import {Table} from "../data/record";



import App from "./app";

interface AppState {
    tables: Immutable.List<Table>;

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
