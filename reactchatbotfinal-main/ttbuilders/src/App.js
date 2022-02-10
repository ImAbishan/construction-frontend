import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Landing from "./Pages/LandingPage/landing.js";
import Main from "./Pages/main.js";
import Login from "./Pages/LoginPage/logIn";
import SignUp from "./Pages/Signup/signUp";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Landing} />
          <Route path="/home" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
