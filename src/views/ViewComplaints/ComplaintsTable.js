import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axio from "axios";
import _ from "@lodash";
const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
});


export default function SimpleTable() {
  const classes = useStyles();
  const [data, setData] = useState(null);
  // axio.get("http://localhost:8000/complaints").then(res => {
  //   console.log(res.data);
  //   setData(res.data);
  // });
  useEffect(() => {
    axio.get("http://localhost:8000/complaints").then(res => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>NAME</TableCell>
            <TableCell align="left">USN</TableCell>
            <TableCell align="left">GENDER</TableCell>
            <TableCell align="left">PHNO.</TableCell>
            <TableCell align="left">EMAIL</TableCell>
            <TableCell align="left">BRANCH</TableCell>
            <TableCell align="left">SEM</TableCell>
            <TableCell>COMPLAINT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {_.map(data, comp => (
            <TableRow key={comp._id}>
              <TableCell component="th" scope="comp">
                {comp.name}
              </TableCell>
              <TableCell align="left">{comp.usn}</TableCell>
              <TableCell align="left">{comp.gender}</TableCell>
              <TableCell align="left">{comp.phoneno}</TableCell>
              <TableCell align="left">{comp.email}</TableCell>
              <TableCell align="left">{comp.branch}</TableCell>
              <TableCell align="left">{comp.sem}</TableCell>
              <TableCell>{comp.details}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
