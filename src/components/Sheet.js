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
        paddingBottom: '40px'
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
            <Table >
                <TableHead>
                <TableRow className={classes.headRow}>
                <TableCell>Dates</TableCell>
                    {colNames.map((colName) => {
                        return (<TableCell>{colName}</TableCell>)
                    })}
                </TableRow>
                </TableHead>
                <TableBody>
                    {sheetRecords.map(( item)=> {
                        return (
                            <>
                            <TableRow>
                                <TableCell className={classes.students}>
                                    {item.student.studentName}
                                </TableCell>
                                {
                                    Object.entries(item.student.emails).map(
                                        ([k , value]) => {
                                        return(<>
                                            <TableCell key={k} className={classes.tableCell}>
                                                {
                                                    Array.from(value).length>0?
                                                    <Cell
                                                        recordId = {item.id}
                                                        entity="student"
                                                        entityName={item.student.studentName}
                                                        date = {k}
                                                        statusColor = {value[0].status==="new"?"red"
                                                            :(value[0].status==="hold")?"yellow": "green"}
                                                        record = {value[0]}
                                                    />:''
                                                }
                                            </TableCell>

                                        </>);
                                        })
                                }
                            </TableRow>
                        {item.volunteers.map((vol)=>{
                            {console.log( vol.emails)}
                            // {console.log(typeof(Object.entries(vol.emails)))}
                            // {Object.entries(vol.emails).map((key : any, value:any) => console.log("key is ", key,
                            //     "value is", value))}
                            return (
                                <TableRow className={classes.volRow}>
                                    <TableCell key={vol.volName} className={classes.volunteers}>
                                        {vol.volName}
                                    </TableCell>
                                    {

                                        Object.entries(vol.emails).map(
                                            ([k , value]) => {
                                            console.log("key is ", k, "value is ", value)
                                                return (<>

                                                    <TableCell key={k} className={classes.tableCell}>

                                                        {Array.from(value).length>0?
                                                            <Cell
                                                                recordId = {item.id}
                                                                entity="volunteers"
                                                                entityName = {vol.volName}
                                                                date = {k}
                                                                statusColor={value[0].status==="new"?"red"
                                                                :(value[0].status==="hold")?"yellow": "green"}
                                                                record={value[0]}
                                                            />:''}

                                                    </TableCell>

                                                </>)})
                                    }
                                </TableRow>
                            )
                        })}
                        </>
                        )
                    })}
                </TableBody>
            </Table>

        </TableContainer>
    )

};

const mapStateToProps = (state) => {
    return {
        columnNames: state.columnNames,
        data: state.data
    };
};

export default connect(mapStateToProps)(Sheet);
