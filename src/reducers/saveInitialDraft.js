
const initialState = {

};
export default function (state=initialState, action) {
    switch (action.type) {
        case "SAVE_INITIAL_DRAFT":
            return action.payload;
        default:
            return state;
    }
}
