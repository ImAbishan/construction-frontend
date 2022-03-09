import React, { Component, useState } from "react";
import axios from "axios";
import "./service.css";
import NavigationBar from "../../Components/NavigationBar/navbar.js";

function ServicePage() {

  return (
    <>
      <NavigationBar />
      <div className="service-container">
        <div className="row">
          <div className="service">
            <i className="fas fa-laptop-code"></i>
            <h2>Design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
              quae?
            </p>
          </div>
          <div className="service">
            <i className="fas fa-chart-line"></i>
            <h2>Development</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
              quae?
            </p>
          </div>
          <div className="service">
            <i className="fab fa-sketch"></i>
            <h2>R&D</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
              quae?
            </p>
          </div>
          <div className="service">
            <i className="fas fa-database"></i>
            <h2>Management</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
              quae?
            </p>
          </div>
          <div className="service">
            <i className="fas fa-mobile-alt"></i>
            <h2>Road</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
              quae?
            </p>
          </div>
          <div className="service">
            <i className="fas fa-file-invoice"></i>
            <h2>Pilling</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
              quae?
            </p>
          </div>
          <div className="service">
            <i className="fas fa-money-check-alt"></i>
            <h2>Electrical</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
              quae?
            </p>
          </div>
          <div className="service">
            <i className="fas fa-network-wired"></i>
            <h2>Interior</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
              quae?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicePage;
