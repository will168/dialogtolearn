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

interface InfoCardProps {

    records: any;
}

const InfoCard:React.FC<InfoCardProps> = ({records}) => {
    const thisRecord = records.record;
    const classes = useStyles();
    return (

        <Card className={classes.Card}>
            <div className={classes.div}>
            <p>{thisRecord.length>0 ? thisRecord[0].subject : ''}</p>
            <br/>
            <p>{thisRecord.length>0 ? thisRecord[0].body : ''}</p>
            </div>
        </Card>

    )
};


const mapStateToProps = (state: any)=> {
    return {
        records: state.records
    };
};

export default connect(mapStateToProps)(InfoCard);
