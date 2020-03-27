import React from "react";
import { connect } from "react-redux";
import Cell from "./Cell";

const Messages = ({ messages }) => {
  return (
    <div>
      {messages.messages.map(message => {
        return <Cell message={message} />;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Messages);
