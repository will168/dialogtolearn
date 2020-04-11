export function openDraft(draft) {
    console.log("open draft", draft)
    return {
        type: "OPEN_DRAFT",
        payload: draft
    };
}
export function clearDraft() {
    return {
        type: "CLEAR_DRAFT",
        payload: {}
    }
}
export function editSubject(subject){

    console.log("subject action", subject)
    return {
        type: "EDIT_SUBJECT",
        payload: subject
    };
}


export function editBody(body){
    return {
        type: "EDIT_BODY",
        payload: body
        }
}

