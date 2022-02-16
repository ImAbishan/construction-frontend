import React, { Component } from "react";
import SimpleForm from "../componentsChat/SimpleForm";
import Navbar from "../Components/NavigationBar/navbar.js";
import Employees from "../Components/Employees/employee.js";
import Secondary from "../Components/Projects/secondary.js";
import Footer from "../Components/Footer/footer.js";
import SliderMain from "../Components/sliderMain";
import FeedbackForm from "../Components/FeedbackForm/feedbackForm";

function Main() {
  return (
    <div>
      <Navbar />
      <SliderMain />
      <Secondary />
      <Employees />
      <SimpleForm />
      <FeedbackForm />
      <Footer />
    </div>
  );
}

export default Main;
