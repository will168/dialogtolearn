import React from "react";
import { connect } from "react-redux";
import { showMessage } from "../actions/messageActions";
import Button from "@material-ui/core/Button";
const Cell = ({ message, showMessage }) => {

  return (
    <div>
      <Button variant="contained"  onClick={() => showMessage(message)}>{message.subject}</Button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    showMessage: message => {
      dispatch(showMessage(message));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Cell);
