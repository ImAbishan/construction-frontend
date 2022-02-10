import React, { Component, useState } from "react";
import axios from "axios";
import "../Signup/signUp.css";

function SignUp() {
  //creaet use state hook
  const [userSignup, setUserSignup] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
  });

  const createUserSignup = () => {
    axios.post("http://localhost:5000/userSignup", userSignup).then(() => {
      window.location.reload(false);
    });
  };

  return (
    <>
      <div class="login-page">
        <div class="form-signin">
          <form class="login-form">
            <input
              type="text"
              value={userSignup.name}
              onChange={(event) => {
                setUserSignup({ ...userSignup, name: event.target.value });
              }}
              placeholder="Username"
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
              type="password"
              value={userSignup.password}
              onChange={(event) => {
                setUserSignup({ ...userSignup, password: event.target.value });
              }}
              placeholder="Password"
            />
            <input
              type="password"
              value={userSignup.cPassword}
              onChange={(event) => {
                setUserSignup({ ...userSignup, cPassword: event.target.value });
              }}
              placeholder="Conform Password"
            />
            <input
              type="password"
              value={userSignup.cPassword}
              onChange={(event) => {
                setUserSignup({ ...userSignup, cPassword: event.target.value });
              }}
              placeholder="Conform Password"
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
