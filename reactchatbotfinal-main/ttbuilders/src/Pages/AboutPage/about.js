import React, {Component, useState} from "react";
import axios from "axios";
import "./about.css";
import NavigationBar from "../../Components/NavigationBar/navbar.js";
import AboutTimeline from "./AboutComponents/Timeline/aboutTimeline";
import FooterNew from "../../Components/FooterNew/footerNew";
import AboutImage from "./AboutComponents/AboutPack/aboutImage";
function AboutPage() {
    return (
        <>
            <NavigationBar/>
            <AboutImage/>
            <AboutTimeline/>
            <FooterNew/>

        </>
);
}

export default AboutPage;
