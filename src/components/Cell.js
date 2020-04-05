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
        borderColor: 'red'
    },  "&:hover": {
        //you want this to be the same as the backgroundColor above
        background: ({statusColor})=> statusColor,
    }
});

const Cell = ({ message, record, showRecord, showMessage, statusColor }) => {
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(false);

  const toggleHover = () => setHovered(!hovered);
  const classes = useStyles({statusColor});

  const handleClick = () => {
      setSelected(!selected)
      showMessage(message);
      console.log(selected)
  };

  return (
    <div className={classes.div}>
      <Button className={classes.btn}

              onMouseOver={() => showRecord(record)}
              onMouseEnter={toggleHover}
              onMouseLeave={toggleHover}
              onClick={handleClick}
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
