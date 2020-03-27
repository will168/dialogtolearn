import * as React from "react";
import { Table,
    TableCell,
    TableBody,
    TableHead,
    TableContainer,
    TableRow
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {green, grey, red, yellow} from "@material-ui/core/colors";
import {connect} from "react-redux";
import Cell from "./Cell";


const useStyles = makeStyles({

    table: {
        background: grey[200],
        '& Button': {
            minWidth: 25 + 'px',
            minHeight: 25 + 'px',
            maxHeight: 25 + 'px',
            maxWidth: 25 + 'px',
            marginRight: 10 + 'px',
            marginBottom: 10 + 'px'
        },
    },
    volunteers: {
        color: red[200]
    },
    students: {
        color: green[300]
    },
    new: {
        color: green[200]
    },
    hold: {
        color: yellow[200]
    },

});

interface SheetProps {
    records: any;
    showRecord: any
}
const Sheet: React.FC<SheetProps> = ({
    records, showRecord}) => {
    const sheetRecords = records.records;
    const colNames = records.columnNames;
    for (let i = 0; i < sheetRecords.length; i++) {
        console.log("-" + sheetRecords[i].student["studentName"]);
        for (let j = 0; j < sheetRecords[i].volunteers.length; j++) {
            console.log("-->" + sheetRecords[i].volunteers[j]["volName"])
        }
    }

    // console.log(sheetRecords)
    const classes = useStyles();
    return (
        <TableContainer>
            <Table className={classes.table}>
                <TableHead>
                <TableRow>
                <TableCell>Dates</TableCell>
                    {colNames.map((colName: any) => {
                        return (<TableCell>{colName}</TableCell>)
                    })}
                </TableRow>
                </TableHead>
                <TableBody>
                    {/*{messages.messages.map(message => {
        return <Cell message={message} />;
      })}*/}
                    {sheetRecords.map((item:any)=> {
                        // @ts-ignore

                        // @ts-ignore
                        // @ts-ignore
                        return (
                            <>
                            <TableRow>
                                <TableCell className={classes.students}>
                                    {item.student.studentName}
                                </TableCell>
                                {
                                    Object.entries(item.student.emails).map(
                                        ([key, value]) =>

                                        <>

                                            <TableCell><Cell message={value}/></TableCell>

                                        </>)
                                }
                            </TableRow>
                        {item.volunteers.map((vol:any)=>{
                            return (
                                <TableRow >
                                    <TableCell className={classes.volunteers}>
                                        {vol.volName}
                                    </TableCell>
                                    {
                                        Object.entries(vol.emails).map(
                                            ([key, value]) =>

                                                <>

                                                    <TableCell><Cell message={value}/></TableCell>

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
