import React from "react";
import { connect } from "react-redux";


import {
    Button,
    ButtonGroup,
    Container, TextField,
    TextareaAutosize
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {editBody, clearDraft, editSubject} from "../actions/draft-action";
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
const MonitorContainer = ({ draft, editSubject, updateMessage, clearDraft, editBody }) => {
    const classes = useStyles();
    console.log("draft is ", draft)

    const handleClick = (draft) => {
        updateMessage(draft);
        clearDraft();
    }
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

                    <TextField
                        label={"Subject"}
                        variant={"outlined"}
                        type="text"
                               value={draft.subject || ''}
                               onChange= {(event) =>
                                   editSubject(event.target.value)
                               }

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
                />
                <br/>
                <ButtonGroup className={classes.ButtonGroup}>
                    <Button variant={"contained"}
                            type="submit"
                            onClick={()=>handleClick(draft)}

                    >Accept Edits</Button>
                    <Button variant={"contained"}>Cancel</Button>

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
        clearDraft: () => (dispatch(clearDraft()))
    }
};


const mapStateToProps = (state) => {
    return {
        records: state.records,
        draft: state.draft
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MonitorContainer);
