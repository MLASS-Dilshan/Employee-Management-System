import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import ButtonComponent from "./shared/ButtonComponent";
import axios from "axios";

const AddEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [position, setPosition] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "firstName") {
      setFirstName(value);
    }
    if (name === "lastName") {
      setLastName(value);
    }
    if (name === "address") {
      setAddress(value);
    }
    if (name === "phoneNumber") {
      setPhoneNumber(value);
    }
    if (name === "position") {
      setPosition(value);
    }
  };

  const addEmployee = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/employees", {
        firstName,
        lastName,
        address,
        phoneNumber,
        position,
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <>
      <div className="form-container">
        <div className="form-header">
          <Typography id="transition-modal-title" variant="h6" component="h2">
            Add an Employee
          </Typography>
        </div>

        <div className="form">
          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 1, width: "50ch" } }}
            noValidate
            autoComplete="off"
            onSubmit={addEmployee}
          >
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              name="firstName"
              onChange={handleChange}
              size="small"
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              name="lastName"
              onChange={handleChange}
              size="small"
            />
            <TextField
              id="outlined-basic"
              label="Address"
              variant="outlined"
              name="address"
              onChange={handleChange}
              size="small"
            />
            <TextField
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              name="phoneNumber"
              onChange={handleChange}
              size="small"
            />
            <TextField
              id="outlined-basic"
              label="Position"
              variant="outlined"
              name="position"
              onChange={handleChange}
              size="small"
            />
            <div className="submit-btn">
              <ButtonComponent type="submit" color="success">
                Submit
              </ButtonComponent>
            </div>
          </Box>
        </div>
      </div>
    </>
  );
};

export default AddEmployee;
