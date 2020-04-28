
const initialState = {

};
export default function (state=initialState, action) {
    switch (action.type) {
        case "OPEN_DRAFT":
            return action.payload;
        case "SAVE_INITIAL_DRAFT":
            return action.payload;
        case "EDIT_SUBJECT":
            return {
                ...state,
                subject: action.payload
            };
        case "EDIT_BODY":
            return {
                ...state,
                body: action.payload
            };
        case "CLEAR_DRAFT":
            return state
        default:
            return state;
    }
}
