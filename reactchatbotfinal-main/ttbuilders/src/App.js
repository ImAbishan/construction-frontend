import React, {Component, useEffect, useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Pages/LandingPage/landing.js";
import Main from "./Pages/main.js";
import Login from "./Pages/LoginPage/logIn";
import SignUp from "./Pages/Signup/signUp";
import AboutPage from "./Pages/AboutPage/about.js";
import Projects from "./Pages/ProjectsPage/projects.js";
import ServicePage from "./Pages/ServicesPage/service.js";
import CareerPage from "./Pages/CareersPage/career.js";
import Admin from "./Pages/AdminPage/adminMain.js";
import AdminHome from "./Pages/AdminPage/Pages/adminHome";
import AdminProducts from "./Pages/AdminPage/Pages/adminProduct";
import AdminReport from "./Pages/AdminPage/Pages/Report/adminReport";
import AdminTeam from "./Pages/AdminPage/Pages/adminTeam";
import AdminEmployee from "./Pages/AdminPage/Pages/Employee/adminEmployee";
import AdminUserResponse from "./Pages/AdminPage/Pages/ContactDetails/adminUserResponse";
import ContactPage from "./Pages/ContactPage/contact";
import FaceVerification from "./Pages/FaceVerificationPage/faceVerification";
import "./App.css"

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Landing} />
          <Route path="/home" component={Main} />
          <Route
              path="/login"
              component={Login}/>
          <Route path="/signup" component={SignUp} />
          <Route path="/verification" component={FaceVerification} />
          <Route path="/about" component={AboutPage} />
          <Route path="/projects" component={Projects} />
          <Route path="/service" component={ServicePage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/careers" component={CareerPage} />

          {/*Admin Paths*/}
          <Route path="/admin" component={Admin} />
          <Route path="/admin/home" component={AdminHome} />
          <Route path="/admin/product" component={AdminProducts} />
          <Route path="/report" component={AdminReport} />
          <Route path="/employee" component={AdminEmployee} />
          <Route path="/admin/team" component={AdminTeam} />
          <Route path="/userResponse" component={AdminUserResponse} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
