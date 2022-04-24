import React, {Component, useEffect, useState} from "react";
import axios from "axios";
import "../Signup/signUp.css";
import NavBarForAuthentication from "../../Components/NavigationBar/navBarForAuthentication.js";
import {WebcamCapture} from "../../Components/Webcam/webcam";
import SecondaryFooter from "../../Components/SecondaryFooter/secondaryFooter";
import {auth} from "../../fire.js"
import {createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword} from "firebase/auth"
import {useHistory} from "react-router-dom";


const SignUp = (props) =>{
  const [user,setUser] = useState({});
  const [firstname,setFirstname] = useState('');
  const [lastname,setlastName] = useState('');
  const [userName,setUserName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [mobile,setMobile] = useState('');
  // const [password,setPassword] = useState('');
  // const [email,setEmail] = useState('');
  // const [password,setPassword] = useState('');
  // const [emailError,setEmailError] = useState(1);
  // const [passwordError,setPasswordError] = useState("");
  const [hasAccount,setHasAccount] = useState(false);
  const history = useHistory();
  // const clearInputs = () => {
  //     setEmail("");
  //     setPassword("");
  // }

  onAuthStateChanged(auth, (currenUser) => {
    setUser(currenUser);
  })

  const logIn = async (e) => {
    e.preventDefault();
    try {
      const user = signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    }
    catch (error){
      alert(error.message);
    }
  }

  const register = async (e) => {
    e.preventDefault();
    try {
      const user = createUserWithEmailAndPassword(auth, email, password);
      //         .catch((err) => {
      //             switch (err.code){
      //                 case "auth/invalid-email":
      //                 case "auth/user-disabled":
      //                 case "auth/user-not-found":
      //                     setEmailError(err.message);
      //                     break;
      //                 case "auth/wrong-password":
      //                     setPasswordError(err.message);
      //                     break;
      //             }
      history.push("/home")
      console.log(user);
    }
    catch (error){
      alert(error.message);
    }
  }

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        // User logged in
        setUser(userAuth);
      } else {
        // User logged out
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);
  return (
    <>
      <NavBarForAuthentication />
      <div class="login-page">
        <div class="form-signin">
          <form class="login-form">
            <input
              type="text"
              placeholder="Firstname"
              autoFocus
              required
              value={firstname}
              onChange={(e) => {setFirstname(e.target.value)}}
            />
            <input
              type="text"
              placeholder="Lastname"
              autoFocus
              required
              value={lastname}
              onChange={(e) => {setlastName(e.target.value)}}
            />
            <input
              type="text"
              placeholder="username"
              autoFocus
              required
              value={userName}
              onChange={(e) => {setUserName(e.target.value)}}
            />
            <input
                type="text"
                placeholder="Email"
                autoFocus
                required
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
            />
            <input
              type="text"
              placeholder="Mobile"
              autoFocus
              required
              value={mobile}
              onChange={(e) => {setMobile(e.target.value)}}
            />

            <input
                type="text"
                placeholder="Password"
                autoFocus
                required
                value={password}
                onChange={(e) => {setPassword(e.target.value)}}
            />
            <WebcamCapture/>
            <div class="space"></div>

            <button onClick={register} href="/login">
              login
            </button>
            <p class="message">
              Already have an Account?
              <a href="/login">Sign In</a>
            </p>
          </form>
        </div>
      </div>

      <SecondaryFooter/>
    </>
  );
}

export default SignUp;


