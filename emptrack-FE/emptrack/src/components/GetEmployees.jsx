import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import axios from "axios";

const GetEmployees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = () => {
    const response = axios
      .get("http://localhost:3000/employees")
      .then((response) => {
        console.log(response.data);
        setEmployees(response.data);
      });
  };

  const tableHeadStyles = {
    backgroundColor: '#D69ADE'
  }

  return (
    <>
    <div className="tableContainer">
      <TableContainer component={Paper} style={{width : '90%'}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={tableHeadStyles}>
            <TableRow>
              <TableCell style={{color: '#fff'}}>First Name</TableCell>
              <TableCell style={{color: '#fff'}}>Last Name</TableCell>
              <TableCell style={{color: '#fff'}}>Address</TableCell>
              <TableCell style={{color: '#fff'}}>Phone Number</TableCell>
              <TableCell style={{color: '#fff'}}>Position</TableCell>
              <TableCell style={{color: '#fff'}}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => (
              <TableRow
                key={employee.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{employee.firstName}</TableCell>
                <TableCell>{employee.lastName}</TableCell>
                <TableCell>{employee.address}</TableCell>
                <TableCell>{employee.phoneNumber}</TableCell>
                <TableCell>{employee.position}</TableCell>
                <TableCell>
                  <Button variant="outlined" color="success" style={{marginRight: '5px'}}>
                    View
                  </Button>
                  <Button variant="outlined" color="error">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    </>
  );
};

export default GetEmployees;
