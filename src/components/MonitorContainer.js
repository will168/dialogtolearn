import React from "react";
import { connect } from "react-redux";
import {
        updateDraft
} from "../actions/draft-action";

import {
    Button,
    ButtonGroup,
    Container, TextField,
    TextareaAutosize
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    div: {
        float: "right"
    },
    ButtonGroup: {
        '& Button': {
            marginRight: 10 + 'px',
            marginBottom: 10 + 'px',

        },

    }
});
const MonitorContainer = ({ records, updateDraft }) => {
    const classes = useStyles();
    const thisRecord = records.message;
    console.log(typeof (thisRecord['message']))

    const m = thisRecord['message']
    let b;
    if (typeof (m) != "undefined") {
        // console.log(m[0].subject)
        b = m[0].body;
    }



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
                <Button variant={"contained"} style={{backgroundColor: 'transparent'}}
                >Okay</Button>
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
                           value={
                               typeof (m) != "undefined" ? m[0].subject :'' }
                           defaultValue={
                               typeof (m) != "undefined" ? m[0].subject :''} variant={"outlined"} />
            </Typography>

            <br/><br/>
            <TextField  style={{width: '300px'}}
                        fullWidth={true}
                        multiline={true}
                        rows="10"
                        variant={"outlined"}
                        label={"Body"}

                        value = {typeof (m) != "undefined" ? b :'' }
                        onChange = {(evt) =>
                            (updateDraft)(
                                thisRecord.entity,
                                thisRecord.entityName,
                                thisRecord.date,
                                evt.target.value
                            )
                        }
                        // value = {m[0].body}
            />
            <br/>
            <ButtonGroup className={classes.ButtonGroup}>
                <Button variant={"contained"}>Accept Edits</Button>
                <Button variant={"contained"}>Cancel</Button>

            </ButtonGroup>
        </Container>

    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
    return {

        updateDraft: (entity, entityName, date, body) =>
            dispatch(updateDraft(entity, entityName, date, body)),

    };
};

const mapStateToProps = state => {
  return {
    records: state.records
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MonitorContainer);
