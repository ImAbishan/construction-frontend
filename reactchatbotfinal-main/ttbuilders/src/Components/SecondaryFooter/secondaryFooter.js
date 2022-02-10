import React from "react";
import "./secondaryFooter.css";
import NavbarLogo from "../../assets/Logo/logoMain.svg";

function SecondaryFooter() {
  return (
    <>
      <section class="contact-area" id="contact"></section>
      <footer>
        <p>
          Copyright &copy; 2022
          <img src={NavbarLogo} />
          All Rights Reserved.
        </p>
      </footer>
    </>
  );
}

export default SecondaryFooter;
