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
import {ToggleButtonGroup} from "@material-ui/lab";


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

interface SheetProps {
    records: any;
}
const Sheet: React.FC<SheetProps> = ({
    records}) => {
    const sheetRecords = records.records;
    const colNames = records.columnNames;
    const classes = useStyles();

    return (
        <TableContainer>
            <Table >
                <TableHead>
                <TableRow className={classes.headRow}>
                <TableCell>Dates</TableCell>
                    {colNames.map((colName: any) => {
                        return (<TableCell>{colName}</TableCell>)
                    })}
                </TableRow>
                </TableHead>
                <TableBody>
                    {sheetRecords.map((item:any)=> {
                        return (
                            <>
                            <TableRow>
                                <TableCell className={classes.students}>
                                    {item.student.studentName}
                                </TableCell>
                                {
                                    Object.values(item.student.emails).map(
                                        (value: any)=> {
                                        return(<>
                                            <TableCell className={classes.tableCell}>
                                                {
                                                    Array.from(value).length>0?
                                                    <Cell
                                                        statusColor = {value[0].status==="new"?"red"
                                                            :(value[0].status==="hold")?"yellow": "green"}
                                                        record = {value}
                                                        message = {value}
                                                    />:''
                                                }
                                            </TableCell>

                                        </>);
                                        })
                                }
                            </TableRow>
                        {item.volunteers.map((vol:any)=>{
                            return (
                                <TableRow className={classes.volRow}>
                                    <TableCell className={classes.volunteers}>
                                        {vol.volName}
                                    </TableCell>
                                    {
                                        Object.values(vol.emails).map(
                                            (value:any) =>

                                                <>

                                                    <TableCell className={classes.tableCell}>

                                                        {Array.from(value).length>0?
                                                            <Cell statusColor={value[0].status==="new"?"red"
                                                                :(value[0].status==="hold")?"yellow": "green"} record={value} message={value}/>:''}

                                                    </TableCell>

                                                </>)
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

const mapStateToProps = (state: any) => {
    return {
        columnNames: state.columnNames,
        records: state.records
    };
};

export default connect(mapStateToProps)(Sheet);
