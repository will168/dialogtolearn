import React, {useState} from "react";
import { connect } from "react-redux";
import {showMessage, showRecord} from "../actions/messageActions";
import {Button} from "@material-ui/core";
import InfoCard from "./InfoCard";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({

    div: {
        position: "absolute",
    },
    btn: {
        background: ({statusColor})=> statusColor,
        minWidth: '25px',
        minHeight: '25px',
        maxHeight: '25px',
        maxWidth: '25px',

      '&:hover': {
        //you want this to be the same as the backgroundColor above
        // background: ({statusColor})=> statusColor,
    }, '&:focus': {
            background: '#9e9e9e',
            boxShadow: '0 0 5px'
        }}});

const Cell = ({ message, record, showRecord, showMessage, statusColor }) => {
  const [hovered, setHovered] = useState(false);

  const toggleHover = () => setHovered(!hovered);
  const classes = useStyles({statusColor});


  return (
    <div className={classes.div}>
      <Button className={classes.btn}
              tabindex="1"
              onMouseOver={() => showRecord(record)}
              onMouseEnter={toggleHover}
              onMouseLeave={toggleHover}
              onClick={() => showMessage(message)}
      >
      </Button>
      {hovered && (
          <InfoCard records={record}/>
      )}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    showRecord: (record) => (dispatch(showRecord(record))),
    showMessage: (message) => (dispatch(showMessage(message)))
    }
};

export default connect(
  null,
  mapDispatchToProps
)(Cell);
