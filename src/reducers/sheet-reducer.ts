import  * as data from '../data/table.json';

export function reduce(state: any = data,
                       action: any): any {
    if (action.type === "SHOW_MESSAGE") {
        return action.payload;
    } else {
        return state;
    }
}
