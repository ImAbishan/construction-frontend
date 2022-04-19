import React, { Component } from "react";
import "./adminLandingPage.css";
import Typical from "react-typical";
import landingImage from "../../../../assets/Images/ALP.png"


function AdminLandingPage() {
    return (
        <>
            <div className="admin-landing-page">
                <div className="admin-text">
                    <p className="head-admin">TT Builders</p>
                    <p className="sub-admin">We Deliver the Best</p>
                </div>
                <div className="admin-image">
                    <img src={landingImage} className="admin-landing-logo" alt="logo" />
                </div>
            </div>
        </>
    );
}

export default AdminLandingPage;
