import React from "react";
import { connect } from "react-redux";

import {
    Button,
    ButtonGroup,
    Container, TextField,
    TextareaAutosize
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import {grey} from "@material-ui/core/colors";
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    div: {
        float: "right",
        background: grey[200]
    },
    ButtonGroup: {
        '& Button': {
            marginRight: 10 + 'px',
            marginBottom: 10 + 'px'
        },
    }
});
const MonitorContainer = ({ records }) => {
    const classes = useStyles();
    const thisRecord = records.record;
    // const records = messages.records;
    // for (let i = 0; i < records.length; i++) {
    //     console.log("-" + records[i].student["studentName"]);
    //     for (let j = 0; j < records[i].volunteers.length; j++) {
    //         console.log("-->" + records[i].volunteers[j]["volName"])
    //     }
    // }
  return (
    <div>
        <Container>
            <br/>
            <ButtonGroup  className={classes.ButtonGroup}>
                <Button variant={"contained"}>Okay</Button>
                <Button variant={"contained"}>Hold</Button>
                <Button variant={"contained"} color={"primary"}>New</Button>
            </ButtonGroup>
            <br/> <br/>
            <Typography variant={"caption"}>
                Email Row Key: 527
                <br/>
                Date:
                <br/>
                From:
                <br/>
                To:
                <br/> <br/>
                <TextField label={"Subject"} size={"small"}
                           value={thisRecord.length>0 ? thisRecord[0].subject : '' }
                           defaultValue={thisRecord.length>0 ? thisRecord[0].subject : ''} variant={"outlined"} />
            </Typography>

            <br/><br/>
            <TextareaAutosize  style={{width: 300+'px'}}
                               rowsMin={10}
                               value = {thisRecord.length>0 ? thisRecord[0].body : ''}  />
            <br/>
            <ButtonGroup className={classes.ButtonGroup}>
                <Button variant={"contained"}>Accept Edits</Button>
                <Button variant={"contained"}>Cancel</Button>

            </ButtonGroup>
        </Container>

    </div>
  );
};

const mapStateToProps = state => {
  return {
    records: state.records
  };
};

export default connect(mapStateToProps)(MonitorContainer);
