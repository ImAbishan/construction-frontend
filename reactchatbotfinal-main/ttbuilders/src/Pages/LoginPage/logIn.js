import React, { Component,useState} from "react";
import "../LoginPage/logIn.css";
import NavBarForAuthentication from "../../Components/NavigationBar/navBarForAuthentication.js";
import {WebcamCapture} from "../../Components/Webcam/webcam";
import Footer from "../../Components/Footer/footer";


// const [name, setName] = useState('')
// const [email, setEmail] = useState('');
//
//
// const submitForm = () => {
//   alert("Form submitted");
//   setName('');
//   setEmail('');
// }

export default class Login extends Component {


  render() {
    return (
      <>
        <NavBarForAuthentication />
        <div class="login-page">
          <div class="form-signin">
            <form class="login-form">
              <input type="text" placeholder="Username"/>
              <input type="password" placeholder="Password" />
              <WebcamCapture/>
              <div class="space"></div>
              <button>login</button>
              <p class="message">
                Not registered..?
                <a href="/signup">Create an account</a>
              </p>
              <p class="message">
                <a href="/admin">Admin</a>
              </p>
            </form>
          </div>
        </div>
        <Footer/>
      </>
    );
  }
}
