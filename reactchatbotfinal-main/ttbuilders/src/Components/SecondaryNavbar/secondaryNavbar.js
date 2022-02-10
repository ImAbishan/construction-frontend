import React from "react";
import "./secondaryNavbar.css";
import NavbarLogo from "../../assets/Logo/logoMain.svg";

function SecondaryNavbar() {
  return (
    <>
      <nav id="navbar" class="">
        <div class="nav-wrapper">
          <div class="logo">
            <a href="/">
              <img src={NavbarLogo} class="logo" />
            </a>
          </div>

          <ul id="menu">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="menuIcon">
        <span class="icon icon-bars"></span>
        <span class="icon icon-bars overlay"></span>
      </div>

      <div class="overlay-menu">
        <ul id="menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SecondaryNavbar;
