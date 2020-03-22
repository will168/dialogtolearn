export function showMessage(message: string) : any{
    return {
        type: "SHOW_MESSAGE",
        payload: message
    };
}
