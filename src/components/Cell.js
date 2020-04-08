import React, {useState} from "react";
import { connect } from "react-redux";
import {showMessage, showRecord} from "../actions/messageActions";
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
        '&:focus': {
            background: '#9e9e9e',
            boxShadow: '0 0 5px'
        }}});

const Cell = ({ message,
                  record,
                  showRecord,
                  showMessage,
                  statusColor,
                  date,
                  entity,
                  entityName
}) => {
  const [hovered, setHovered] = useState(false);

  const toggleHover = () => setHovered(!hovered);
  const classes = useStyles({statusColor});
    console.log("entity is ", entity, entityName)
  const messageToShow = {
      date,
      entity,
      entityName,
      message
  }
  //   date, entity, entityName,


  return (
    <div className={classes.div}>
      <button className={classes.btn}
              onMouseOver={() => showRecord(messageToShow)}
              onMouseEnter={toggleHover}
              onMouseLeave={toggleHover}
              style={{ backgroundColor: {statusColor} }}
              onClick={() => showMessage(messageToShow)}
      >
      </button>
      {hovered && (
          <InfoCard records={record}/>
      )}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    showRecord: (messageToShow) => (dispatch(showRecord(messageToShow))),
    showMessage: (messageToShow) => (dispatch(showMessage(messageToShow)))
    }
};

export default connect(
  null,
  mapDispatchToProps
)(Cell);
