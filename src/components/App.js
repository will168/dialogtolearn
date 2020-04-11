import React from "react";
import Monitor from "./MonitorContainer";
import Sheet from "./Sheet";
import Grid from "@material-ui/core/Grid";

export default function App() {
    return (
    <div>
            <Grid container>
                <Grid item xs={9}>
                    <Sheet/>
                </Grid>
                <Grid item xs={3}>
                    <Monitor />
                </Grid>
            </Grid>
    </div>
    );
}
