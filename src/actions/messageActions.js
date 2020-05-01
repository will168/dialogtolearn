export const updateMessage = message => {
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
