export function reduce(state, action) {
    switch (action.type) {
        case "UPDATE_DRAFT":

            return state.records.map(item=>item)
        default:
            return state;

    }
}
