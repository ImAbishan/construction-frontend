import React, { Component } from "react";
import SimpleForm from "../componentsChat/SimpleForm";
import "../App.css";
import Navbar from "../Components/NavigationBar/navbar.js";
import Employees from "../Components/Employees/employee.js";
import Secondary from "../Components/Projects/secondary.js";
import Footer from "../Components/Footer/footer.js";
import SliderMain from "../Components/sliderMain";

function Main() {
  return (
    <div>
      <Navbar />
      <SliderMain />
      <Secondary />
      <Employees />
      <SimpleForm />
      <Footer />
    </div>
  );
}

export default Main;
