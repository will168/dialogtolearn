
const initialState = {
    id: 1,
    date: "4/6/20",
    entity: "student",
    entityName: "John",
    mailId: 528,
    subject: 'Hi Ted',
    body: 'I went to the zoo. --John',
    status: 'new'
};
export default function (state=initialState, action) {
    switch (action.type) {
        case "OPEN_DRAFT":
            return action.payload;
            break;
        case "EDIT_SUBJECT":
            console.log("subject is", action.payload)
            return {
                ...state,
                subject: action.payload
            };
            break;
        case "EDIT_BODY":
            return {
                ...state,
                body: action.payload
            };
            break;
        case "CLEAR_DRAFT":
            return action.payload;
            break;

        default:
            return state;
    }
}
