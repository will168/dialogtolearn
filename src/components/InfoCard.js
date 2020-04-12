import * as React from "react";
import {Card} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {grey} from "@material-ui/core/colors";

const useStyles = makeStyles({
    Card: {
        background: grey[900],
        color: grey[100],
        width: '150px',
        height: '100px',
        marginLeft: '50px',
        padding: '25px 25px 25px 25px',
        opacity: 1,
        position: 'relative',
        zIndex: 1500
    }, div: {
        marginLeft: '10px'
    }
});


const InfoCard= ({ record }) => {
    const classes = useStyles();
    return (

        <Card className={classes.Card}>
            <div className={classes.div}>
                <p>{record.subject}</p>
                <p>{record.body}</p>
            </div>
        </Card>

    )
};

export default InfoCard;
