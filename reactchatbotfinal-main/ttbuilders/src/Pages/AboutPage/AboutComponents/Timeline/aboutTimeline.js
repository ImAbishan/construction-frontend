import React, { useState, useRef, useEffect } from "react";

import "./aboutTimeLine.css";

const AboutTimeline = () => {
    return (
        <>
            <section id="counter-stats" className="wow fadeInRight" data-wow-duration="1.4s">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 stats">
                            <i className="fa fa-flash" aria-hidden="true"></i>
                            <div className="counting" data-count="900000">75+</div>
                            <h5>Projects</h5>
                        </div>

                        <div className="col-lg-3 stats">
                            <i className="fa fa-check" aria-hidden="true"></i>
                            <div className="counting" data-count="280">300+</div>
                            <h5>Employees</h5>
                        </div>

                        <div className="col-lg-3 stats">
                            <i className="fa fa-user" aria-hidden="true"></i>
                            <div className="counting" data-count="75">100+</div>
                            <h5>Happy clients</h5>
                        </div>

                        <div className="col-lg-3 stats">
                            <i className="fa fa-coffee" aria-hidden="true"></i>
                            <div className="counting" data-count="999">25+</div>
                            <h5>Ongoing</h5>
                        </div>


                    </div>
                </div>

            </section>


        </>
    );
};
export default AboutTimeline;
