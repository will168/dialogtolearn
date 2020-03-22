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



