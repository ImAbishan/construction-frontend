import React, {Component, useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import "../LoginPage/logIn.css";
import NavBarForAuthentication from "../../Components/NavigationBar/navBarForAuthentication.js";
import {WebcamCapture} from "../../Components/Webcam/webcam";
import SecondaryFooter from "../../Components/SecondaryFooter/secondaryFooter";
import {auth} from "../../fire.js"
import {createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword} from "firebase/auth"
import {login} from "../../actions/auth";
import AdminLandingPage from "../AdminPage/Pages/LandingPage/adminLandingPage";


const Login = (props) => {
    const [user,setUser] = useState({});
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
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
            history.push("/admin")
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

    // const clearErrors = () => {
    //     setEmailError("");
    //     setPasswordError("");
    // }

    // const handleLogin = () => {
    //     clearErrors();
    //     auth
    //         .auth()
    //         .signInWithEmailAndPassword(email,password)
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
    //         });
    // };


    // const handleSignUp = () => {
    //     clearErrors();
    //     auth
    //         .auth()
    //         .createUserWithEmailAndPassword(email,password)
    //         .catch((err) => {
    //             switch (err.code){
    //                 case "auth/email-already-in-use":
    //                 case "auth/invalid-email":
    //                     setEmailError(err.message);
    //                     break;
    //                 case "auth/weak-password":
    //                     setPasswordError(err.message);
    //                     break;
    //             }
    //         });
    // };

    // const handleLogout = async (e) => {
    //      e.preventDefau
    //     await signOut(auth);
    // }

    // const authListener = () => {
    //     auth.auth().onAuthStateChanged(user => {
    //         if (user){
    //             clearInputs();
    //             setUser(user);
    //         }
    //         else{
    //             setUser(" ")
    //         }
    //     })
    // }
    // useEffect(() => {
    //     authListener()
    // }, []);


    // const {
    //     email,
    //     setEmail,
    //     password,
    //     setPassword,
    //     handleLogin,
    //     handleResister
    // } = props;
   return (
      <>
        <NavBarForAuthentication />
        <div className="login-page">
          <div className="form-signin">
            <form className="login-form">
              <input
                  type="text"
                  placeholder="Email"
                  autoFocus
                  required
                  value={email}
                  onChange={(e) => {setEmail(e.target.value)}}
              />
                <p className="error-message"></p>
              <input type="text"
                     placeholder="Password"
                     autoFocus
                     required
                     value={password}
                     onChange={(e) => {setPassword(e.target.value)}} />
                <p className="error-message"></p>
              <div class="space"></div>
              <button onClick={logIn}>login</button>
                {/*<Router>*/}
                {/*    <Switch>*/}
                {/*        <Route path="/login">*/}
                {/*            <Login/>*/}
                {/*        </Route>*/}
                {/*        {user && <ProtectedRoute exact path="/" component={Guidelines} />}*/}
                {/*    </Switch>*/}
                {/*</Router>*/}
              <p className="message">
                Not registered..?
                <a href="/signup">Create an account</a>
              </p>
              <p className="message">
                <a href="/admin">Admin</a>
              </p>
            </form>
          </div>
        </div>

        <SecondaryFooter/>

      </>
    );
}

export default Login;
