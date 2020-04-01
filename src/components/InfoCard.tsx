import * as React from "react";
import {connect} from "react-redux";
import {Card} from "@material-ui/core";

interface InfoCardProps {

    records: any;
}

const InfoCard:React.FC<InfoCardProps> = ({records}) => {
    const thisRecord = records.record;
    console.log(records);
    console.log(thisRecord);
    return (
        <Card>
            <p>{thisRecord.length>0 ? thisRecord[0].subject : ''}</p>
            <br/>
            <p>{thisRecord.length>0 ? thisRecord[0].body : ''}</p>
        </Card>
    )
};


const mapStateToProps = (state: any)=> {
    return {
        records: state.records
    };
};

export default connect(mapStateToProps)(InfoCard);
