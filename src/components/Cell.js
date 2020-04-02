import React, {useState} from "react";
import { connect } from "react-redux";
import {showMessage, showRecord} from "../actions/messageActions";
import Button from "@material-ui/core/Button";
import InfoCard from "./InfoCard";
import {makeStyles} from "@material-ui/core/styles";
import {grey} from "@material-ui/core/colors";


const useStyles = makeStyles({
    div: {
        position: "absolute"
    },
    infoCard: {
        background: grey[200],
        color: grey[100],
        marginLeft: 400 + 'px',
        display: "none",
    },
    btn: {
        '&hover': {
            infoCard: {
                opacity: 1,
                background: grey[200],
                color: grey[100],
                marginLeft: 400 + 'px',
                // display: "block",
                position: "relative",
                zIndex: -1
            }
        }
    },


    // Button:hover .overlay {
    //     display: "block"
    // }
})
const Cell = ({ message, record, showRecord, showMessage }) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  const classes = useStyles();
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
