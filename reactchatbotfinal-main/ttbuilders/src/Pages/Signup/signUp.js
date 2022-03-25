import React, { Component, useState } from "react";
import axios from "axios";
import "../Signup/signUp.css";
import NavBarForAuthentication from "../../Components/NavigationBar/navBarForAuthentication.js";
import {WebcamCapture} from "../../Components/Webcam/webcam";
import Footer from "../../Components/Footer/footer";


function SignUp() {
  //create use state hook
  const [userSignup, setUserSignup] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    userName: "",
    password: "",
    email: "",
    typeEnum: "",
  });

  const createUserSignup = () => {
    axios
      .post("http://localhost:9090/api/usr-mgt/users", userSignup)
      .then(() => {
        window.location.reload(false);
      });
  };

  return (
    <>
      <NavBarForAuthentication />
      <div class="login-page">
        <div class="form-signin">
          <form class="login-form">
            <input
              type="text"
              placeholder="Firstname"
            />
            <input
              type="text"
              placeholder="Lastname"
            />
            <input
              type="text"
              value={userSignup.userName}
              onChange={(event) => {
                setUserSignup({ ...userSignup, userName: event.target.value });
              }}
              placeholder="username"
            />
            <input
              type="email"
              value={userSignup.email}
              onChange={(event) => {
                setUserSignup({ ...userSignup, email: event.target.value });
              }}
              placeholder="Email"
            />

            <input
              type="text"
              placeholder="Mobile"
            />

            <input
              type="password"
              value={userSignup.password}
              onChange={(event) => {
                setUserSignup({ ...userSignup, password: event.target.value });
              }}
              placeholder="Password"
            />
            <input
              type="text"
              placeholder="User Type"
            />

            <WebcamCapture/>
            <div class="space"></div>

            <button onClick={createUserSignup} href="/login">
              login
            </button>
            <p class="message">
              Already have an Account?
              <a href="/login">Sign In</a>
            </p>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default SignUp;
