import React, { Component } from "react";
import SimpleForm from "./componentsChat/SimpleForm";
import "./App.css";
import Navbar from "./Components/NavigationBar/navbar";
import Employees from "./Components/Employees/employee";
import Secondary from "./Components/Projects/secondary";

function App() {
  return (
    <div>
      <Navbar />
      <Secondary />
      <Employees />
      <SimpleForm />
    </div>
  );
}

export default App;
