import React, { Component, useState } from "react";
import axios from "axios";
import "./career.css";
import NavigationBar from "../../Components/NavigationBar/navbar.js";
import SimpleForm from "../../componentsChat/SimpleForm";
import Logo from "../../assets/Images/ca.png"
function CareerPage() {
  return (
    <>
      <NavigationBar />
      <SimpleForm/>
      <div class="max-width">
        <div className="image-left">
          <img
              class="image-ca"
              src={Logo}
              alt="Human Rights Logo"/>
          <div>
            <p class="ca">Career Opening</p>
            <p class="para">
              TT Builders has now been certified as a 'Great Place to Work', which is the most definitive 'Employer-of-Choice' recognition that organizations aspire to achieve. The Certification is recognized world over by employees and employers alike and is considered the 'Gold Standard' in identifying and recognizing Great Workplace Cultures. This achievement proves that our employees TRUST the people they work for, have PRIDE in what they do and ENJOY the company of people they work with.</p>
          </div>
        </div>
      </div>


    </>
  );
}

export default CareerPage;
