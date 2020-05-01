import React from "react";
import { connect } from "react-redux";
import {disable, enable} from "./App";

import {
    Button,
    ButtonGroup,
    Container,
    TextField,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {editBody,
        clearDraft,
        editSubject,
        openDraft,
        saveInitialDraft,
        updateStatus} from "../actions/draft-action";
import {updateMessage} from "../actions/messageActions"


const useStyles = makeStyles({
    div: {
        float: "right"
    },
    ButtonGroup: {
        '& Button': {
            marginRight: '10px',
            marginBottom: '10px',

        },
    },
    btn: {

        "background-color": "#e0e0e0",
        "outline": "none",
        borderRadius: '5%',
        padding: '0.5em',
        margin: '10',
        display: 'inline-block',
        '-webkit-appearance': 'none',
        "font-size":"16px",

}});

const MonitorContainer = ({ draft, editSubject, openDraft, initialDraft, updateMessage, saveInitialDraft ,updateStatus, editBody }) => {

    const classes = useStyles();


    const handleClick = (draft) => {
        if (Object.keys(draft).length === 0 && draft.constructor === Object) {
            return;
        } else {
            updateMessage(draft);
            updateStatus(draft, draft.status);
            saveInitialDraft(draft);
            disable()
        }
    };

    function changeBody(event) {
        editBody(event.target.value)
        enable();

    }

    function changeSubject(event){
        editSubject(event.target.value)
        enable();
    }

    const cancelForm = (draft) => {
        if (Object.keys(draft).length === 0 && draft.constructor === Object) {
            return;
        } else {
            openDraft(draft)
            disable()
        }
    }

    const updateStatusHelper = (draft, status) => {
        if (Object.keys(draft).length === 0 && draft.constructor === Object) {
            return;
        } else {
            updateStatus(draft, status)
            enable();
        }
    }
    return (
        <div>
            <Container>
                <br/>

                <ButtonGroup  className={classes.ButtonGroup}>
                    <Button variant={"contained"} onClick={()=>updateStatusHelper(draft, 'okay')}>Okay</Button>
                    <Button variant={"contained"} onClick={()=>updateStatusHelper(draft, 'hold')}>Hold</Button>
                    <Button variant={"contained"} onClick={()=>updateStatusHelper(draft, 'new')}>New</Button>
                </ButtonGroup>
                <br/> <br/>
                <Typography variant={"caption"}>
                    Email Row Key: {draft.mailId}
                    <br/>
                    Date: {draft.date}
                    <br/>
                    From: {draft.entityName}
                    <br/>

                    <br/> <br/>

                    <TextField
                        label={"Subject"}
                        variant={"outlined"}
                        disabled={draft.id?false:true}
                        type="text"
                               value={draft.subject || ''}
                               onChange= {changeSubject}

                        data-flag = {0}

                    />
                </Typography>

                <br/><br/>
                <TextField  style={{width: '300px'}}
                            fullWidth={true}
                            multiline={true}
                            rows="10"
                            variant={"outlined"}
                            label={"Body"}
                            disabled={draft.id?false:true}
                            value={draft.body || ''}
                            onChange= {changeBody}
                            data-flag = {0}

                />
                <br/>
                <br/>
                <ButtonGroup  className={classes.ButtonGroup}>
                    <button className={classes.btn} onClick={()=>handleClick(draft)}>Accept Edits</button>
                    <button
                             id={"cancel"}
                             className = {classes.btn}
                             onClick = {()=>cancelForm(initialDraft)}

                    >Cancel</button>
                </ButtonGroup>
            </Container>

        </div>
    );
};



const mapDispatchToProps = dispatch => {
    return {
        updateMessage: (draft) =>
            (dispatch(updateMessage(draft))),
        editSubject: (subject) =>
            (dispatch(editSubject(subject))),
        editBody: (body) => (dispatch(editBody(body))),
        clearDraft: (draft) => (dispatch(clearDraft(draft))),
        openDraft: (draft) => (dispatch(openDraft(draft))),
        updateStatus: (draft, status) => (dispatch(updateStatus(draft, status))),
        saveInitialDraft: (initialDraft) => (dispatch(saveInitialDraft(initialDraft)))
    }
};


const mapStateToProps = (state) => {
    return {
        records: state.records,
        draft: state.draft,
        initialDraft: state.initialDraft
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MonitorContainer);
