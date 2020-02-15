import React from "react";
import {
    TextareaAutosize,
    Button,
    ButtonGroup,
    Container, TextField
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

const MonitorContainer = () => {
const classes = useStyles();
    return (
        <div className={classes.div}>
            <Container  >
                <br/>
            <ButtonGroup  className={classes.ButtonGroup}>
                <Button variant={"contained"}>Okay</Button>
                <Button  variant={"contained"}>Hold</Button>
                <Button variant={"contained"} color={"primary"}>New</Button>
            </ButtonGroup>
                <br/> <br/>
                <Typography variant={"caption"}>
                    Email Row Key: 527
                    <br/>
                    Date: 2018-11-27
                    <br/>
                    From: Alex Rodriguez &lt;alex.rodriguez@alphapublicschools.org&gt;
                    <br/>
                    To: x@dialogtolearn.org
                    <br/> <br/>
                    <TextField label={"Subject"} size={"small"}
                               defaultValue="RE: Dialog to Learn" variant={"outlined"} />
                </Typography>

                <br/><br/>
                <TextareaAutosize variant={"outlined"} style={{width: 300+'px'}} aria-label="minimum height" rowsMin={10} placeholder="Email body" />
                <br/>
                <ButtonGroup className={classes.ButtonGroup}>
                    <Button variant={"contained"}>Accept Edits</Button>
                    <Button variant={"contained"}>Cancel</Button>

                </ButtonGroup>
            </Container>
        </div>
    )
};

export default MonitorContainer;