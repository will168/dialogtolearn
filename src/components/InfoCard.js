import * as React from "react";
import {connect} from "react-redux";
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


const InfoCard= ({ records }) => {
    const thisRecord = records.record;
    const m = thisRecord['message']

    const classes = useStyles();
    return (

        <Card className={classes.Card}>
            <div className={classes.div}>
            <p>{typeof (m) != "undefined" ? m[0].subject :''}</p>
            <br/>
            <p>{typeof (m) != "undefined" ? m[0].body :''}</p>
            </div>
        </Card>

    )
};


const mapStateToProps = (state)=> {
    return {
        records: state.records
    };
};

export default connect(mapStateToProps)(InfoCard);
