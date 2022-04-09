import React, { Component, useState } from "react";
import axios from "axios";
import "./projects.css";
import NavigationBar from "../../Components/NavigationBar/navbar.js";
import FooterNew from "../../Components/FooterNew/footerNew";

function Projects() {
  return (
    <>
      <NavigationBar />
      <section className="section">
        <h2 className="section-title">Top Projects</h2>

        <div className="education-container bd-grid">
          <div className="education-content">
            <div>
              <h3 className="education-year time">2013-2014</h3>
              <span className="education-university time"
              >Construction</span
              >
            </div>

            <div className="education-time">
              <span className="education-rounder"></span>
              <span className="eduction-line"></span>
            </div>

            <div>
              <h3 className="education-race">Two Stored Hospital</h3>
              <span className="education-speciality">Design and Construction of Proposed Two Storied Surgical Building at Base Hospital – Horan</span>
            </div>
          </div>

          <div className="education-content">
            <div>
              <h3 className="education-year">National Police Academy</h3>
              <span className="education-university">Construction of New Academic and Administrative Building for National Police Academy at Katana</span>
            </div>

            <div className="education-time">
              <span className="education-rounder"></span>
              <span className="eduction-line"></span>
            </div>

            <div>
              <h3 className="education-race time">2014 - 2015</h3>
              <span className="education-speciality time"
              >Construction</span
              >
            </div>
          </div>

          <div className="education-content">
            <div>
              <h3 className="education-year time">2013-2014</h3>
              <span className="education-university time"
              >Construction</span
              >
            </div>

            <div className="education-time">
              <span className="education-rounder"></span>
              <span className="eduction-line"></span>
            </div>

            <div>
              <h3 className="education-race">Two Stored Hospital</h3>
              <span className="education-speciality">Design and Construction of Proposed Two Storied Surgical Building at Base Hospital – Horan</span>
            </div>
          </div>

          <div className="education-content">
            <div>
              <h3 className="education-year">National Police Academy</h3>
              <span className="education-university">Construction of New Academic and Administrative Building for National Police Academy at Katana</span>
            </div>

            <div className="education-time">
              <span className="education-rounder"></span>
              <span className="eduction-line"></span>
            </div>

            <div>
              <h3 className="education-race time">2014 - 2015</h3>
              <span className="education-speciality time"
              >Construction</span
              >
            </div>
          </div>
          <div className="education-content">
            <div>
              <h3 className="education-year time">2013-2014</h3>
              <span className="education-university time"
              >Construction</span
              >
            </div>

            <div className="education-time">
              <span className="education-rounder"></span>
              <span className="eduction-line"></span>
            </div>

            <div>
              <h3 className="education-race">Two Stored Hospital</h3>
              <span className="education-speciality">Design and Construction of Proposed Two Storied Surgical Building at Base Hospital – Horan</span>
            </div>
          </div>

          <div className="education-content">
            <div>
              <h3 className="education-year">National Police Academy</h3>
              <span className="education-university">Construction of New Academic and Administrative Building for National Police Academy at Katana</span>
            </div>

            <div className="education-time">
              <span className="education-rounder"></span>
              <span className="eduction-line"></span>
            </div>

            <div>
              <h3 className="education-race time">2014 - 2015</h3>
              <span className="education-speciality time"
              >Construction</span
              >
            </div>
          </div>



        </div>
      </section>
      <FooterNew/>
    </>
  );
}

export default Projects;
