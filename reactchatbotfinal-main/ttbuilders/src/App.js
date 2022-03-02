import React, { Component } from "react";
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
import AdminReport from "./Pages/AdminPage/Pages/adminReport";
import AdminTeam from "./Pages/AdminPage/Pages/adminTeam";
import "./App.css"
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Landing} />
          <Route path="/home" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/about" component={AboutPage} />
          <Route path="/projects" component={Projects} />
          <Route path="/service" component={ServicePage} />
          <Route path="/careers" component={CareerPage} />
          <Route path="/admin" component={Admin} />
          <Route path="/admin/home" component={AdminHome} />
          <Route path="/admin/product" component={AdminProducts} />
          <Route path="/admin/report" component={AdminReport} />
          <Route path="/admin/team" component={AdminTeam} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
