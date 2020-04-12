import {combineReducers} from "redux";
import messagesReducer from "./messages";
import draftReducer from "./draft-reducer"

const indexReducer = combineReducers({
    data: messagesReducer,
    draft: draftReducer
});

export default indexReducer
