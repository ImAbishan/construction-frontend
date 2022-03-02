import React, { Component, useState } from "react";
import axios from "axios";
import "./adminMain.css";
import NavBarForAuthentication from "../../Components/NavigationBar/navBarForAuthentication";

function Admin() {
  //create use state hook
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
     <NavBarForAuthentication/>
    </>
  );
}

export default Admin;
