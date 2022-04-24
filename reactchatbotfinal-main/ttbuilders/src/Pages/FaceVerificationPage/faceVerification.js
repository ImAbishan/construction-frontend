import React, { Component } from "react";
import "./faceVerification.css";
import {WebcamCapture} from "../../Components/Webcam/webcam";
import NavBarForAuthentication from "../../Components/NavigationBar/navBarForAuthentication.js";
import SecondaryFooter from "../../Components/SecondaryFooter/secondaryFooter";

function FaceVerification() {
    return (
        <>

            <NavBarForAuthentication />
            <div class="verification-page">
                <div class="form-verification">
                    <form class="login-form">
                        <WebcamCapture/>
                        <div class="space-verification"></div>
                        <p className="message">
                            Click { }
                            <a href="/login">Proceed</a> to verify Your Credentials
                        </p>
                    </form>
                </div>
            </div>

            <SecondaryFooter/>

        </>
    );
}

export default FaceVerification;
