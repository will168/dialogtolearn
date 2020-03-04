import React from "react";
import CalendarSheet from "./components/CalendarSheet";
import MonitorContainer from "./components/Monitor";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {grey} from "@material-ui/core/colors";
import {records as myRecords} from "./components/Sheet"
import Sheet from "./components/Sheet";
const useStyles = makeStyles({

    div: {
        background: grey[200],

    }
});
const App  = () => {
    const classes = useStyles();
    return (
        <div className={classes.div}>
            <Grid container>
                <Grid item xs={9}>

                    <Sheet records={myRecords}/>
                </Grid>
                <Grid item xs={3}>
                    <MonitorContainer />
                </Grid>
            </Grid>

        </div>
        // <div className={classes.div}>
        //     <Sheet records = {myRecords}/>
        // </div>
    )
};

export default App;
