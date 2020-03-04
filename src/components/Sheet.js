import React, {useState} from "react";
import { Table,
    TableCell,
    TableBody,
    TableHead,
    TableContainer,
    TableRow,
    Button
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {green, grey, red, yellow} from "@material-ui/core/colors";
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
export const records =
    {
        "Kunal": ["Jim", "Ron"],
        "John":  ["Rob", "Harry"],
        "Tom":   ["Jeff", "Bob", "Mike"]
    };

// console.log(records)
// console.log(Object.values(records));

const Sheet = (props) => {
    const records = props.records;
    console.log("values " + Object.values(records))
    console.log( "entries" + Object.entries(records));
    let entries = Object.entries(records);
    let vals = Object.values(records);
    for (let i = 0; i < entries.length; i++) {
        console.log(entries[i])
    }


    function fillemail(e) {
        e.preventDefault();
        alert('clicked');
    }




    // console.log((records.entries()));
    // console.log(

    // function(){
    //     var foo = 'Hello';
    //     var bar = 'World!'
    //
    //     function baz(){
    //         return foo + ' ' + bar;
    //     }
    // })();

    const classes = useStyles();
    // const [records, chang] = useState()
    return (
        // props.records.forEach((key, value) =>

        <TableContainer >
            <Table className={classes.table}>
                <TableRow align="left">
                    <TableCell>
                        Dates
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
                <TableBody>
                    {
                        entries.map(
                            ([key,value]) =>
                                <>
                                    <TableRow>
                                        <TableCell className={classes.volunteers}>{key}</TableCell>
                                        <TableCell><Button onClick={fillemail} variant="contained" className={classes.new} >  </Button></TableCell>
                                        <TableCell><Button onClick={fillemail} variant="contained" className={classes.hold}>  </Button></TableCell>
                                        <TableCell><Button onClick={fillemail} variant="contained" className={classes.new}>  </Button></TableCell>
                                        <TableCell><Button onClick={fillemail} variant="contained" className={classes.hold}>  </Button></TableCell>
                                        <TableCell><Button onClick={fillemail} variant="contained" >  </Button></TableCell>
                                        <TableCell><Button onClick={fillemail} variant="contained" >  </Button></TableCell>
                                    </TableRow>

                                    {value.map((val) =>
                                        <TableRow>
                                            <TableCell className={classes.students}>
                                                {val}
                                            </TableCell>
                                            <TableCell><Button onClick={fillemail} variant="contained" className={classes.hold}>  </Button></TableCell>
                                            <TableCell><Button onClick={fillemail} variant="contained" >  </Button></TableCell>
                                            <TableCell><Button onClick={fillemail} variant="contained" className={classes.new}>  </Button></TableCell>
                                            <TableCell><Button onClick={fillemail} variant="contained" >  </Button></TableCell>
                                            <TableCell><Button onClick={fillemail} variant="contained" >  </Button></TableCell>
                                            <TableCell><Button onClick={fillemail} variant="contained" >  </Button></TableCell>
                                        </TableRow>
                                    )
                                    }
                                    {/*{entry.map((val)=>*/}
                                    {/*    <TableRow>*/}
                                    {/*    <TableCell>{val}</TableCell>*/}
                                    {/*    </TableRow>*/}
                                    {/*)*/}
                                    {/*    }*/}
                                </>
                        ) }


                    {/*// <div></div>*/}
                    {/*// <TableRow>*/}
                    {/*//     <TableCell>{entry[0]}</TableCell>*/}
                    {/*//     <TableCell>*/}
                    {/*//         <Button onClick={fillemail} variant="contained" >  </Button>*/}
                    {/*//*/}
                    {/*//     </TableCell>*/}
                    {/*//     <TableCell>*/}
                    {/*//         <Button onClick={fillemail} variant="contained" >  </Button>*/}
                    {/*//*/}
                    {/*//     </TableCell>*/}
                    {/*//     <TableCell>*/}
                    {/*//         <Button onClick={fillemail} variant="contained" >  </Button>*/}
                    {/*//*/}
                    {/*//     </TableCell>*/}
                    {/*//     <TableCell>*/}
                    {/*//         <Button onClick={fillemail} variant="contained" >  </Button>*/}
                    {/*//*/}
                    {/*//     </TableCell>*/}
                    {/*// </TableRow>*/}



                    {/*            {entry[1].map((en) => <TableRow>*/}
                    {/*                    <TableCell className={classes.volunteers}>{en}</TableCell>*/}
                    {/*                    <TableCell>*/}
                    {/*                        <Button onClick={fillemail} variant="contained" >  </Button>*/}

                    {/*                    </TableCell>*/}
                    {/*                    <TableCell>*/}
                    {/*                        <Button onClick={fillemail} variant="contained" >  </Button>*/}

                    {/*                    </TableCell>*/}
                    {/*                    <TableCell>*/}
                    {/*                        <Button onClick={fillemail} variant="contained" >  </Button>*/}

                    {/*                    </TableCell>*/}
                    {/*                </TableRow>)*/}
                    {/*            }*/}
                    {/*        )*/}
                    {/*}*/}

                </TableBody>

                {/*        {*/}
                {/*            entry[1].map((en)=>*/}
                {/*            <tr>{en}</tr>)*/}
                {/*        }*/}
                {/*    </TableRow>)*/}
                {/*}*/}
            </Table>
        </TableContainer>

    )
};
export default Sheet;
