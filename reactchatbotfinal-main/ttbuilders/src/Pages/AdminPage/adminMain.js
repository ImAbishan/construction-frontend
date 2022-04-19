import React, { Component, useState } from "react";
import "./adminMain.css";
import AdminNavbar from "./Components/AdminNavbar/adminnavbar";
import AdminLandingPage from "./Pages/LandingPage/adminLandingPage";

function Admin() {
  return (
    <>
        <AdminNavbar/>
        <AdminLandingPage/>
    </>
  );
}

export default Admin;
