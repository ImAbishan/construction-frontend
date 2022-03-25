import React, {useState, useRef, useEffect} from "react";

import "./footerNew.css";

const FooterNew = () => {
    return (
        <>

            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-row">
                        <div className="footer-col">
                            <h4>Sitesoch</h4>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/projects">Pricing</a></li>
                                <li><a href="/about">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Get Help</h4>
                            <ul>
                                <li><a href="/service">Services</a></li>
                                <li><a href="/projects">Projects</a></li>
                                <li><a href="/about">Terms & Conditions</a></li>
                                <li><a href="/about">Cookie Policy</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Address</h4>
                            <ul>
                                <li>
                                    <a href="#">No 123, 1 <sup>st</sup> Lane</a>
                                </li>
                                <li>
                                    <a href="#">Colombo 06</a>
                                </li>
                                <li>
                                    <a href="#">Sri Lanka</a>
                                </li>
                                <li>
                                    <a href="#">06000</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>follow us</h4>
                            <div className="social-links">
                                <a href="#"><i className="fab fa-google"></i></a>
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterNew;
