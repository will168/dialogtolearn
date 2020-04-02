import React, {useState} from "react";
import { connect } from "react-redux";
import {showMessage, showRecord} from "../actions/messageActions";
import Button from "@material-ui/core/Button";
import InfoCard from "./InfoCard";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({

    div: {
        position: "absolute",

    },
    infoCard: {
        display: "none",
    },
    btn: {
        background: ({statusColor})=> statusColor,
        minWidth: 25 + 'px',
        minHeight: 25 + 'px',
        maxHeight: 25 + 'px',
        maxWidth: 25 + 'px',
        '&hover': {
            infoCard: {
                position: "relative",
            }
        }
    },
});

const Cell = ({ message, record, showRecord, showMessage, statusColor }) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  const classes = useStyles({
      statusColor
  });
  return (
    <div className={classes.div}>
      <Button className={classes.btn}  variant="contained"
              onMouseOver={() => showRecord(record)}
              onMouseEnter={toggleHover}
              onMouseLeave={toggleHover}
              onClick={() => showMessage(message)}
      >
      </Button>
      {hovered && (
          <InfoCard className={classes.infoCard} records={record}/>
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
