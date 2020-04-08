export function openDraft(record) {
    return {
        type: "OPEN_DRAFT",
        payload: record
    };
}

export function updateDraft(entity, entityName, date,  body){
    return {
        type: "UPDATE_DRAFT",
        payload: {
            entity,
            entityName,
            date,
            body
        }
    };
}

// export function clearDraft(): any {
//     return {
//         type: "CLEAR_DRAFT"
//     };
// }
