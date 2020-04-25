import * as React from "react";
import { Table,
    TableCell,
    TableBody,
    TableHead,
    TableContainer,
    TableRow
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
    tableCell: {
        paddingBottom: '40px',

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
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow className={classes.headRow}>
                        <TableCell>Dates</TableCell>
                        {colNames.map((colName) => {
                            return (<TableCell>{colName}</TableCell>)
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sheetRecords.map((item) =>
                        (item.student).map((stud) => {
                                return (
                                    <>
                                        <TableRow>
                                            <TableCell className={classes.students}>
                                                {stud.entityName}
                                            </TableCell>
                                            {
                                                Object.entries(stud.emails).map(
                                                    ([k , mails]) => {
                                            return (<>
                                                <TableCell size={'medium'} key={k} className={classes.tableCell}>
                                                    {mails.map(
                                                            (mail)=>(

                                                        <TableCell style={{padding: '20px'}}>
                                                                    <Cell
                                                                        recordId = {item.id}
                                                                        entity="student"
                                                                        entityName={stud.entityName}
                                                                        date = {k}
                                                                        status={mail.status}
                                                                        record = {mail}
                                                                    />
                                                        </TableCell>

                                                        ))}
                                                </TableCell>
                                                </>)}
                                                    )}
                                        </TableRow>
                                        {item.volunteers.map((vol)=>(
                                                <TableRow className={classes.volRow}>
                                                    <TableCell key={vol.entityName} className={classes.volunteers}>
                                                        {vol.entityName}
                                                    </TableCell>
                                                    {
                                                        Object.entries(vol.emails).map(
                                                            ([k , mails]) => (
                                                                <>
                                                                    <TableCell key={k} className={classes.tableCell}>
                                                                        {Object.values(mails).map(
                                                                            (mail)=>(
                                                                            <TableCell style={{padding: '20px'}}>
                                                                            <Cell
                                                                                recordId = {item.id}
                                                                                entity="volunteers"
                                                                                entityName = {vol.entityName}
                                                                                date = {k}
                                                                                status={mail.status}
                                                                                record={mail}
                                                                            />
                                                                            </TableCell>

                                                                            ))}
                                                                    </TableCell>
                                                                        </>)
                                                        )}
                                                </TableRow>))
                                        }
                                    </>
                                )
                        }))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}


const mapStateToProps = (state) => {
    return {
        columnNames: state.columnNames,
        data: state.data
    };
};

export default connect(mapStateToProps)(Sheet);

