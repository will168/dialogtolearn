import React from "react";
import { connect } from "react-redux";


import {
    Button,
    ButtonGroup,
    Container,
    TextField,

} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {editBody, clearDraft, editSubject, updateStatus} from "../actions/draft-action";
import {updateMessage} from "../actions/messageActions"

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

const MonitorContainer = ({ draft, editSubject, updateMessage, clearDraft,updateStatus, editBody }) => {
    const classes = useStyles();
    function uncheck() {
         document.getElementsByName("btn").forEach((item)=>{
             item.checked=false
         })
    }
    const handleClick = (draft) => {
        if (Object.keys(draft).length === 0 && draft.constructor === Object) {
            return;
        } else {
            updateMessage(draft);
            uncheck();
            clearDraft();
        }
    };

    const cancelForm = () => {
        if (Object.keys(draft).length === 0 && draft.constructor === Object) {
            return;
        } else {
            uncheck();
            clearDraft();
        }
    }

    const updateStatusHelper = (draft, status) => {
        if (Object.keys(draft).length === 0 && draft.constructor === Object) {
            return;
        } else {
            updateStatus(draft, status)
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
                        type="text"
                               value={draft.subject || ''}
                               onChange= {(event) =>
                                   editSubject(event.target.value)
                               }
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
                            value={draft.body || ''}
                            onChange= {(event) =>
                                editBody(event.target.value)
                            }
                            data-flag = {0}

                />
                <br/>
                <ButtonGroup className={classes.ButtonGroup}>
                    <Button variant={"contained"}
                            type="submit"
                            onClick={()=>handleClick(draft)}

                    >Accept Edits</Button>
                    <Button variant={"contained"}
                    onClick = {()=>cancelForm()}
                    >Cancel</Button>

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
        clearDraft: () => (dispatch(clearDraft())),
        updateStatus: (draft, status) => (dispatch(updateStatus(draft, status)))
    }
};


const mapStateToProps = (state) => {
    return {
        records: state.records,
        draft: state.draft
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MonitorContainer);
