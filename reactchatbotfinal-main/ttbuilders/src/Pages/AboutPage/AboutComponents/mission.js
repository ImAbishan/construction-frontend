import React, { Component, useState } from "react";
import "./mission.css";

function Mission() {
  return (
    <>
      <div class="half-half-image-text">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1>Our Mission</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-lg-6">
              <div class="content">
                <p>
                  At Fluid Automotive, our purpose is to make automotive parts
                  easily accessible for everyone. Working with our partner
                  brands, we aim to retail the highest quality parts, whilst
                  maintaining a high level of customer satisfaction.
                </p>
              </div>
            </div>
            <div class="col-12 col-lg-6">
              <div
                class="img"
                style="background: url('https://images.pexels.com/photos/89784/bmw-suv-all-terrain-vehicle-fog-89784.jpeg?cs=srgb&dl=automobile-bmw-car-89784.jpg&fm=jpg')no-repeat center;background-size:cover;"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mission;
