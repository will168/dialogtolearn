export const showMessage = message => {
  return {
    type: "SHOW_MESSAGE",
    payload: message
  };
};


export const showRecord = record => {
  return {
    type: "SHOW_RECORD",
    payload: record
  }
};
