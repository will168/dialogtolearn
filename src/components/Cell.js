import React, {useState} from "react";
import { connect } from "react-redux";
import {showRecord} from "../actions/messageActions";
import InfoCard from "./InfoCard";
import {makeStyles} from "@material-ui/core/styles";
import {openDraft} from "../actions/draft-action";
import {saveInitialDraft} from "../actions/draft-action";
import {disable} from "./App";


const useStyles = makeStyles({
    div: {
        position: "absolute",
    },
    btn: {
        backgroundColor: ({statusColor})=> statusColor,
        border: '1px solid #fff',
        // borderRadius: '50%',
        padding: '0.5em',
        '-webkit-appearance': 'none',
        display: 'inline-block',
        minWidth: '25px',
        minHeight: '25px',
        maxHeight: '25px',
        maxWidth: '25px',
        '&:checked': {
            background: '#9e9e9e',
            boxShadow: '0 0 5px'
        }}});


const Cell = ({
                  record,
                  showRecord,
                  openDraft,
                  status,
                  date,
                  entity,
                  entityName,
                  recordId,
                  saveInitialDraft
}) => {
  const [hovered, setHovered] = useState(false);

  const toggleHover = () => setHovered(!hovered);
  function returnStatusColor(status) {
      switch (status) {
          case "okay":
              return "green";
          case "hold":
              return "yellow";
          case "new":
              return "red";
          default:
              return "grey"
      }
  }
  const statusColor = returnStatusColor(status);
  const classes = useStyles({statusColor});
  const refObj = {
      ...record,
      id: recordId,
      entity: entity,
      entityName: entityName,
      date: date
  };
    const handleClick = (draft) => {
        openDraft(draft);
        saveInitialDraft(draft);
        disable();
    };
  return (
    <div className={classes.div}>
      <input type={"radio"} className={classes.btn}
              onMouseOver={() => showRecord(refObj)}
              onMouseEnter={toggleHover}
              onMouseLeave={toggleHover}
              style={{ backgroundColor: {statusColor} }}
              onClick={() => handleClick(refObj)}
              name={'btn'}
              data-flag={0}
      />

      {hovered && record && (
          <InfoCard record={refObj}/>
      )}
    </div>
  );
};


const mapDispatchToProps = dispatch => {
  return {
    showRecord: (refObj) => (dispatch(showRecord(refObj))),
    openDraft: (refObj) => (dispatch(openDraft(refObj))),
    saveInitialDraft: (refObj) => (dispatch(saveInitialDraft(refObj)))
    }
};

export default connect(
    null,
  mapDispatchToProps
)(Cell);
