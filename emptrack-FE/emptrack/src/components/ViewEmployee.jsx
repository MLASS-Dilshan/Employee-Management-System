import React from "react";
import Typography from "@mui/material/Typography";

const ViewEmployee = ({ employee }) => {
  return (
    <>
      <Typography id="transition-modal-title" variant="h6" component="h2">
        Details of Employee {employee.firstName}
      </Typography>
      <Typography id="transition-modal-description" sx={{ mt: 2 }}>
        <b>Full Name:</b> {employee.firstName} {employee.lastName}
        <br />
        <b>Address:</b> {employee.address}
        <br />
        <b>Phone Number:</b> {employee.phoneNumber}
        <br />
        <b>Position:</b> {employee.position}
      </Typography>
    </>
  );
};

export default ViewEmployee;
