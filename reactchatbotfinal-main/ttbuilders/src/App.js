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
          <Route path="/contact" component={Admin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
