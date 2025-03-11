import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import ButtonComponent from "./shared/ButtonComponent";
import ModalComponent from "./shared/ModalComponent";
import ViewEmployee from "./ViewEmployee";
import AddEmployee from "./AddEmployee";

const GetEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const [openAdd, setOpenAdd] = useState(false);
  const handleOpenAdd = (employee) => {
    setSelectedEmployee(employee);
    setOpenAdd(true);
  };
  const handleCloseAdd = () => setOpenAdd(false);

  const [openEmp, setOpenEmp] = useState(false);
  const handleOpen = (employee) => {
    setSelectedEmployee(employee);
    console.log(`${employee.id}`);
    setOpenEmp(true);
  };
  const handleClose = () => setOpenEmp(false);

  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = () => {
    axios.get("http://localhost:3000/employees").then((response) => {
      console.log(response.data);
      setEmployees(response.data);
    });
  };

  const deleteEmployee = (id) => {
    axios
      .delete(`http://localhost:3000/employees/${id}`)
      .then((response) => {
        console.log(response.status, `Employee with ID ${id} deleted`);
        getAllEmployees();
      })
      .catch((error) => {
        console.log(error, `Error deleting employee with id ${id}`);
      });
  };

  const tableHeadStyles = {
    backgroundColor: "#D69ADE",
  };

  return (
    <>
      <div className="add-btn">
        <ButtonComponent color="success" onClick={handleOpenAdd}>Add +</ButtonComponent>
      </div>

      {/* Employee add modal */}
      <ModalComponent open={openAdd} onClose={handleCloseAdd}>
        <AddEmployee />
      </ModalComponent>

      {/* View employee modal */}
      <ModalComponent open={openEmp} onClose={handleClose}>
        {selectedEmployee && <ViewEmployee employee={selectedEmployee} />}
      </ModalComponent>

      <div className="tableContainer">
        <TableContainer component={Paper} style={{ width: "90%" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead style={tableHeadStyles}>
              <TableRow>
                <TableCell style={{ color: "#fff" }}>First Name</TableCell>
                <TableCell style={{ color: "#fff" }}>Last Name</TableCell>
                <TableCell style={{ color: "#fff" }}>Address</TableCell>
                <TableCell style={{ color: "#fff" }}>Phone Number</TableCell>
                <TableCell style={{ color: "#fff" }}>Position</TableCell>
                <TableCell style={{ color: "#fff" }}>Action</TableCell>
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
                    <ButtonComponent
                      color="success"
                      style={{ marginRight: "5px" }}
                      onClick={() => handleOpen(employee)}
                    >
                      View
                    </ButtonComponent>

                    <ButtonComponent
                      color="error"
                      onClick={() => deleteEmployee(employee.id)}
                    >
                      Delete
                    </ButtonComponent>

                    <ModalComponent></ModalComponent>
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
