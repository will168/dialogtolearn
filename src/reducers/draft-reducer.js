
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

        case "EDIT_SUBJECT":
            console.log("subject is", action.payload)
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
            return action.payload;
        default:
            return state;
    }
}
