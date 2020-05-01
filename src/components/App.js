import React, {useEffect} from "react";
import Monitor from "./MonitorContainer";
import Sheet from "./Sheet";
import Grid from "@material-ui/core/Grid";

export function disable() {
    document.getElementById("cancel").setAttribute("disabled", "disabled")
}

export function enable() {
    document.getElementById("cancel").removeAttribute("disabled")
}
export default function App() {

    useEffect(() => {
        disable()
    });
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
