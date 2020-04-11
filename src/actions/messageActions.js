export const updateMessage = message => {
  console.log("you clicked for monitor message", message);
  return {
    type: "UPDATE_MESSAGE",
    payload: message
  };
};


export const showRecord = record => {
  return {
    type: "SHOW_RECORD",
    payload: record
  }
};
