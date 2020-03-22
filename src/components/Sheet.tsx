import * as React from "react";
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

interface SheetProps {
    records: any;
    message: string;
    showMessage: any;
}

const Sheet: React.FC<SheetProps> = (
    { records, showMessage}) => {

    let entries = Object.entries(records);
    // let data = props.table;
    // console.log( data["default"]["Table"].fatRows[0]["student"]);
    // for(fatRow in data["fatRowArray"]){
    //     studentName = fatRow.student.studentName;
    //
    //     //now do whatever you need with the string studentName
    //
    //     volunteerArray = fatRow.volunteer;
    //     for(vName in volunteerArray){
    //
    //         //now do whatever you need with the string vName
    //
    //     }
    // }
    // console.log(typeof (props.table))
    // console.log(props.table["default"]["Table"])
    // function handleClick(e) {
    //     // e.preventDefault();
    //     let m = message
    //     alert('clicked');
    //         // return e;
    //
    // }




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


    // useEffect(() => {
    //     // Update the document title using the browser API
    //     // document.title = `You clicked ${count} times`;
    //     fillemail('This is test email body');
    //
    // });


    const classes = useStyles();
    // const [message] = useState({Table: props.table["default"]["Table"]})
    // console.log(message)
    return (
        // props.records.forEach((key, value) =>

        <TableContainer >
            <Table className={classes.table}>
                <TableRow >
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
                                        <TableCell><Button  variant="contained" className={classes.new} >  </Button></TableCell>
                                        <TableCell><Button  variant="contained" className={classes.hold}>  </Button></TableCell>
                                        <TableCell><Button  variant="contained" className={classes.new}>  </Button></TableCell>
                                        <TableCell><Button  variant="contained" className={classes.hold}>  </Button></TableCell>
                                        <TableCell><Button  variant="contained" >  </Button></TableCell>
                                        <TableCell><Button  variant="contained" >  </Button></TableCell>
                                    </TableRow>

                                    {/*{value.map((val) =>*/}
                                    {/*    <TableRow>*/}
                                    {/*        <TableCell className={classes.students}>*/}
                                    {/*            {val}*/}
                                    {/*        </TableCell>*/}
                                    {/*        <TableCell><Button  variant="contained" className={classes.hold}>  </Button></TableCell>*/}
                                    {/*        <TableCell><Button  variant="contained" >  </Button></TableCell>*/}
                                    {/*        <TableCell><Button  variant="contained" className={classes.new}>  </Button></TableCell>*/}
                                    {/*        <TableCell><Button  variant="contained" >  </Button></TableCell>*/}
                                    {/*        <TableCell><Button  variant="contained" >  </Button></TableCell>*/}
                                    {/*        <TableCell><Button  variant="contained" >  </Button></TableCell>*/}
                                    {/*    </TableRow>*/}
                                    {/*)*/}
                                    {/*}*/}
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
                    {/*//         <Button  variant="contained" >  </Button>*/}
                    {/*//*/}
                    {/*//     </TableCell>*/}
                    {/*//     <TableCell>*/}
                    {/*//         <Button  variant="contained" >  </Button>*/}
                    {/*//*/}
                    {/*//     </TableCell>*/}
                    {/*//     <TableCell>*/}
                    {/*//         <Button  variant="contained" >  </Button>*/}
                    {/*//*/}
                    {/*//     </TableCell>*/}
                    {/*//     <TableCell>*/}
                    {/*//         <Button  variant="contained" >  </Button>*/}
                    {/*//*/}
                    {/*//     </TableCell>*/}
                    {/*// </TableRow>*/}



                    {/*            {entry[1].map((en) => <TableRow>*/}
                    {/*                    <TableCell className={classes.volunteers}>{en}</TableCell>*/}
                    {/*                    <TableCell>*/}
                    {/*                        <Button  variant="contained" >  </Button>*/}

                    {/*                    </TableCell>*/}
                    {/*                    <TableCell>*/}
                    {/*                        <Button  variant="contained" >  </Button>*/}

                    {/*                    </TableCell>*/}
                    {/*                    <TableCell>*/}
                    {/*                        <Button  variant="contained" >  </Button>*/}

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
