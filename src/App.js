import React from "react";
import CalendarSheet from "./components/CalendarSheet";
import MonitorContainer from "./components/Monitor";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {grey} from "@material-ui/core/colors";

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

        <CalendarSheet/>
            </Grid>
        <Grid item xs={3}>
        <MonitorContainer />
        </Grid>
        </Grid>
        </div>
    )
};

export default App;