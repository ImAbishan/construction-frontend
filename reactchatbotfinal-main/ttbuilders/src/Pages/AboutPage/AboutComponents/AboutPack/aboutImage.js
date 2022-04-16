import React, { useState, useRef, useEffect } from "react";

import "./aboutImage.css";
import AboutImage from "../../../../assets/Images/aboutImg.png";

const AboutMainContent = () => {
    return (
        <>
            <div className="beside-img">
                <img src={AboutImage} className="beside-pic" />
                <p className="beside-heading">
                    Welcome to - - - - <br/>
                     - - - - TT Builders
                </p>
                <p className="beside-txt">
                    At the Home of Sri Lankan Hospitality, you are not just our guest –
                    but part of our family. For nearly half a century, we have welcomed
                    people from the world over to dwell in our homely spaces, and our
                    footprint has earned us the honour of being one of Sri Lanka’s largest
                    and most reputed families of hotels and villas, with a powerful
                    presence across our nation. Inspired by the infinite natural beauty of
                    our teardrop-shaped isle, each home in our family is also designed
                    with modern tropical spaces that immerse you in the luxury of not just
                    our hospitality, but the magnificence of our picturesque surroundings.
                    Having endured times of strife on our island, we take immense pride in
                    persevering the progress of tourism and sustainable travel that Sri
                    Lanka is known for. And with that perseverance, comes our innate duty
                    to preserve our enchanted land through an unwavering commitment to our
                    natural environment and our friendly people – starting with our
                    talented youth who are nurtured to build sustainable futures, while
                    our partnerships with local communities inspire the cooperative
                    promotion of ethical business practices. Likewise, we extend the same
                    care and attention to you when booking directly with us. Rest assured
                    that we would always provide you with the best possible rates, with
                    our Best Rates Guarantee for all properties across our tropical
                    island.
                </p>
            </div>
            <div className="what-we-do">
                <p className="do-head">
                    What We Do
                </p>

                <div className="service-container">
                    <div className="row">
                        <div className="service">
                            <i className="fas fa-laptop-code"></i>
                            <h2>Design</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                                quae?
                            </p>
                        </div>
                        <div className="service">
                            <i className="fas fa-chart-line"></i>
                            <h2>Development</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                                quae?
                            </p>
                        </div>
                        <div className="service">
                            <i className="fab fa-sketch"></i>
                            <h2>R&D</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                                quae?
                            </p>
                        </div>
                        <div className="service">
                            <i className="fas fa-database"></i>
                            <h2>Management</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                                quae?
                            </p>
                        </div>
                        <div className="service">
                            <i className="fas fa-mobile-alt"></i>
                            <h2>Road</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                                quae?
                            </p>
                        </div>
                        <div className="service">
                            <i className="fas fa-file-invoice"></i>
                            <h2>Pilling</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                                quae?
                            </p>
                        </div>
                        <div className="service">
                            <i className="fas fa-money-check-alt"></i>
                            <h2>Electrical</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                                quae?
                            </p>
                        </div>
                        <div className="service">
                            <i className="fas fa-network-wired"></i>
                            <h2>Interior</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                                quae?
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};
export default AboutMainContent;
