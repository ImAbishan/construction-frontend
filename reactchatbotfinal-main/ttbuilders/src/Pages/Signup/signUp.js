import React, { Component, useState } from "react";
import axios from "axios";
import "../Signup/signUp.css";
import SecondaryNavbar from "../../Components/SecondaryNavbar/secondaryNavbar";

function SignUp() {
  //creaet use state hook
  const [userSignup, setUserSignup] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    userName: "",
    password: "",
    email: "",
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
      <SecondaryNavbar />
      <div class="login-page">
        <div class="form-signin">
          <form class="login-form">
            <input
              type="text"
              value={userSignup.firstName}
              onChange={(event) => {
                setUserSignup({ ...userSignup, firstName: event.target.value });
              }}
              placeholder="firstName"
            />
            <input
              type="text"
              value={userSignup.lastName}
              onChange={(event) => {
                setUserSignup({ ...userSignup, lastName: event.target.value });
              }}
              placeholder="lastName"
            />
            <input
              type="text"
              value={userSignup.mobile}
              onChange={(event) => {
                setUserSignup({ ...userSignup, mobile: event.target.value });
              }}
              placeholder="mobile"
            />
            <input
              type="text"
              value={userSignup.userName}
              onChange={(event) => {
                setUserSignup({ ...userSignup, userName: event.target.value });
              }}
              placeholder="userName"
            />
            <input
              type="password"
              value={userSignup.password}
              onChange={(event) => {
                setUserSignup({ ...userSignup, password: event.target.value });
              }}
              placeholder="password"
            />
            <input
              type="email"
              value={userSignup.email}
              onChange={(event) => {
                setUserSignup({ ...userSignup, email: event.target.value });
              }}
              placeholder="Email"
            />

            <button onClick={createUserSignup} href="home.js">
              login
            </button>
            <p class="message">
              Already have an Account?
              <a href="/login">Sign In</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;