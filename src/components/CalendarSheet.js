import React from "react";
import { Table,
    TableCell,
    TableBody,
    TableHead,
    TableContainer,
    TableRow,
    Button
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {grey} from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
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
    }
});
const CalendarSheet = () => {
    const classes = useStyles();
    return (
        <>
            <TableContainer>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Dates/Volunteer
                            </TableCell>

                            <TableCell>
                                Week of 10/16
                            </TableCell>
                            <TableCell>
                                Week of 10/16
                            </TableCell>
                            <TableCell>
                                Week of 10/16
                            </TableCell>
                            <TableCell>
                                Week of 10/16
                            </TableCell>
                            <TableCell>
                                Week of 10/16
                            </TableCell>
                            <TableCell>
                                Week of 10/18
                            </TableCell>
                            <TableCell>
                                Week of 10/16
                            </TableCell>
                            <TableCell>
                                Week of 10/16
                            </TableCell>
                            <TableCell>
                                Week of 10/16
                            </TableCell>
                            <TableCell>
                                Week of 10/16
                            </TableCell>
                            <TableCell>
                                Week of 10/16
                            </TableCell>
                            <TableCell>
                                Week of 10/16
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                Kunal/Jack
                            </TableCell>
                            <TableCell>
                                {/*<div style={{borderStyle: 'solid', width: 200 + 'px', height: 200 + 'px', color : 'white', backgroundColor: 'black'}}>Hello how are you doing</div>*/}
                                <Button variant="contained" > </Button>

                                <Button variant="contained" > </Button>

                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Andrew/Mark
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Jim/Bob
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Mike/Sam
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>
                                John/James
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Randy/Kim
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Rob/Eugene
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Ted/Ben
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Tim/Pat
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                                <Button variant="contained" >  </Button>
                            </TableCell>

                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
};

export default CalendarSheet;
