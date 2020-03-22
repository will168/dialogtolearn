import * as React from "react";
import MonitorContainer from "./Monitor";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {grey} from "@material-ui/core/colors";
import {records as myRecords} from "./Sheet"
import Sheet from "./Sheet";
import  * as myData from '../data/table.json';
import {showMessage} from "../actions/actions";

const useStyles = makeStyles({

    div: {
        background: grey[200],

    }
});

interface AppProps {
    message: any;
    showMessage: any;
    date: any;
    from: any;
    to: any;
    subject: any
}

const App: React.FC<AppProps>  = (
    {
        message,
        showMessage,
        date,
        from,
        to,
        subject
    }) => {

    const classes = useStyles();
    return (
        <div className={classes.div}>
            <Grid container>
                <Grid item xs={9}>
                    <Sheet message={message} showMessage={showMessage} records={myRecords} />
                </Grid>
                <Grid item xs={3}>
                    <MonitorContainer message={message} date={date} from={from} to={to} subject={subject}  />
                </Grid>
            </Grid>

        </div>
    )
};

export default App;
