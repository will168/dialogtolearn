import * as React from "react";
import { Table,
    td,
    tbody,
    th,
    TableContainer,
    tr
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {green, grey, red, } from "@material-ui/core/colors";
import {connect} from "react-redux";
import Cell from "./Cell";


const useStyles = makeStyles({

    volRow: {
        background: grey[100]
    },
    headRow: {
        background: grey[400]
    },
    td: {
        // paddingBottom: '40px',


    },
    volunteers: {
        color: red[200]
    },
    students: {
        color: green[300]
    },


});

const Sheet= ({ data }) => {
    const sheetRecords = data.records;
    const colNames = data.columnNames;
    const classes = useStyles();

    return (
        <>
            <table>
                <tbody>
                <th>
                    <tr className={classes.headRow}>
                        <td>Dates</td>
                        {colNames.map((colName) => {
                            return (<td>{colName}</td>)
                        })}
                    </tr>
                </th>

                    {sheetRecords.map((item) =>
                        (item.student).map((stud) => {
                                return (
                                    <>
                                        <tr>
                                            <td className={classes.students}>
                                                {stud.entityName}
                                            </td>
                                            {
                                                Object.entries(stud.emails).map(
                                                    ([k , mails]) => {
                                            return (<>
                                                <td key={k} >
                                                    {mails.map(
                                                            (mail)=>(

                                                        <td style={{padding: '20px', }}>
                                                                    <Cell
                                                                        recordId = {item.id}
                                                                        entity="student"
                                                                        entityName={stud.entityName}
                                                                        date = {k}
                                                                        status={mail.status}
                                                                        record = {mail}
                                                                    />
                                                         </td>

                                                        ))}
                                                </td>
                                                </>)}
                                                    )}
                                        </tr>
                                        {item.volunteers.map((vol)=>(
                                                <tr className={classes.volRow}>
                                                    <td key={vol.entityName} className={classes.volunteers}>
                                                        {vol.entityName}
                                                    </td>
                                                    {
                                                        Object.entries(vol.emails).map(
                                                            ([k , mails]) => (
                                                                <>
                                                                    <td key={k}>
                                                                        {Object.values(mails).map(
                                                                            (mail)=>(
                                                                            <td style={{padding: '20px'}}>
                                                                            <Cell
                                                                                recordId = {item.id}
                                                                                entity="volunteers"
                                                                                entityName = {vol.entityName}
                                                                                date = {k}
                                                                                status={mail.status}
                                                                                record={mail}
                                                                            />
                                                                            </td>

                                                                            ))}
                                                                    </td>
                                                                        </>)
                                                        )}
                                                </tr>))
                                        }
                                    </>
                                )
                        }))}
                </tbody>
            </table>
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        columnNames: state.columnNames,
        data: state.data
    };
};

export default connect(mapStateToProps)(Sheet);

