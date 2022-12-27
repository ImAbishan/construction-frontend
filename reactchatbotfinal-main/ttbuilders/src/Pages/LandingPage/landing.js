import React, { Component } from "react";
import MainImage from "../../assets/Images/landingPng.png";
import "../LandingPage/landingPage.css";
import logo from "../LandingPage/logoMain.svg";
import Typical from "react-typical";

function Landing() {
  return (
    <div className="landing-page">
      <img src={MainImage} className="img-main" />

      <div className="welcome-main">
        <a href="/home">
          <img src={logo} className="logo landing-home" alt="logo" />
        </a>

        <a href="/login">
          <button className="landing-btn">Sign In</button>{" "}
        </a>

        <a href="/signup">
          <button className="landing-btn-signup">Sign Up</button>
        </a>

        <h3 className="title-landing">Innovay Construction</h3>
        <h3 className="title-para">
          We{" "}
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={["Design", 1000, "Build", 1000, "Architect", 1000]}
          />
        </h3>


      </div>
    </div>
  );
}

export default Landing;
