import * as React from "react";
import {
    useState
} from "react";
import {
    Button,
    ButtonGroup,
    Container, TextField
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {grey} from "@material-ui/core/colors";
import Typography from '@material-ui/core/Typography';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

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

interface MonitorProps {
    message: string;
    subject: string;
    from: string;
    to: string;
    date: string;

}
const classes = useStyles();
const MonitorContainer: React.FC<MonitorProps> =

    ({
         message
     , subject, from, to, date}) => (

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
                    Date: {date}
                    <br/>
                    From: {from}
                    <br/>
                    To: {to}
                    <br/> <br/>
                    <TextField label={"Subject"} size={"small"}
                               defaultValue={subject} variant={"outlined"} />
                </Typography>

                <br/><br/>
                <TextareaAutosize  style={{width: 300+'px'}}
                                  rowsMin={10} placeholder="Email body"
                                  defaultValue = {message}  />
                <br/>
                <ButtonGroup className={classes.ButtonGroup}>
                    <Button variant={"contained"}>Accept Edits</Button>
                    <Button variant={"contained"}>Cancel</Button>

                </ButtonGroup>
            </Container>
        </div>
    );
export default MonitorContainer;
