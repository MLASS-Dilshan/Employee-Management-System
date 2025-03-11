import React from "react";
import "./App.css";
import GetEmployees from "./components/GetEmployees";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GetEmployees />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
