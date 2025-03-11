import { Button } from "@mui/material";
import React from "react";

const ButtonComponent = ({
  children,
  variant = "outlined",
  color = "primary",
  style,
  onClick,
}) => {
  return (
    <Button variant={variant} color={color} onClick={onClick} style={style}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
