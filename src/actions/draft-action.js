export function openDraft(draft) {
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


export function updateStatus(draft, status) {
        return {
            type: "UPDATE_STATUS",
            payload: {
                draft,
                status
            }
        }

}
