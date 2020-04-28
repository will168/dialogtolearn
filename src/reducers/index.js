import {combineReducers} from "redux";
import messagesReducer from "./messages";
import draftReducer from "./draft-reducer"
import saveInitialDraft from "./saveInitialDraft";

const indexReducer = combineReducers({
    data: messagesReducer,
    draft: draftReducer,
    initialDraft: saveInitialDraft
});

export default indexReducer
