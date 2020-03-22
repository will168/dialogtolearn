import { combineReducers } from "redux";

import * as SheetReducer from "./sheet-reducer";


const IndexReducer = combineReducers({
    name: SheetReducer.reduce
});

export default IndexReducer;
