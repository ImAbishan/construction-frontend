import React, {useState, useRef, useEffect} from "react";

import "./secondaryFooter.css";

const SecondaryFooter = () => {
    return (
        <>
            <footer className="secondary-footer">
                <div className="wrapper">
                    <p className="wrapper-text">&copy;2022 <span className="sec-footer-span">TT Builders</span>   All Rights Reserved</p>
                </div>
            </footer>
        </>
    );
};

export default SecondaryFooter;
