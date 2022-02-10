import React, { Component } from "react";
import "../LoginPage/logIn.css";
import SecondaryNavbar from "../../Components/SecondaryNavbar/secondaryNavbar";
import SecondaryFooter from "../../Components/SecondaryFooter/secondaryFooter";

export default class Login extends Component {
  render() {
    return (
      <>
        <SecondaryNavbar />
        <div class="login-page">
          <div class="form-signin">
            <form class="register-form">
              <input type="text" placeholder="name" />
              <input type="password" placeholder="password" />
              <input type="text" placeholder="email address" />
              <button>create</button>
              <p class="message">
                Already registered? <a href="#">Sign In</a>
              </p>
            </form>
            <form class="login-form">
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <button>login</button>
              <p class="message">
                Not registered..?
                <a href="/signup">Create an account</a>
              </p>
            </form>
          </div>
        </div>
        <SecondaryFooter />
      </>
    );
  }
}