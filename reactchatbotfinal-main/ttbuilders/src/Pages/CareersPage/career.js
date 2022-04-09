import React, { Component, useState } from "react";
import axios from "axios";
import "./career.css";
import NavigationBar from "../../Components/NavigationBar/navbar.js";
import SimpleForm from "../../componentsChat/SimpleForm";
import Logo from "../../assets/Images/ca.png"
import FooterNew from "../../Components/FooterNew/footerNew";

function CareerPage() {
  return (
    <>
      <NavigationBar />
      <SimpleForm/>
      <div class="max-width">
        <div className="image-left">
          <img
              class="image-ca"
              src={Logo}
              alt="Human Rights Logo"/>
          <div>
            <p class="ca">Career Opening</p>
            <p class="para">
              TT Builders has now been certified as a 'Great Place to Work', which is the most definitive 'Employer-of-Choice' recognition that organizations aspire to achieve. The Certification is recognized world over by employees and employers alike and is considered the 'Gold Standard' in identifying and recognizing Great Workplace Cultures. This achievement proves that our employees TRUST the people they work for, have PRIDE in what they do and ENJOY the company of people they work with.</p>
          </div>
        </div>
      </div>

        <section className="contact section" id="contact">
            <div className="container">
                <div className="row-contact">
                    <div className="contact-form padd-15">
                        <div className="row-contact">
                            <div className="form-item col-6 padd-15">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Name*"/>
                                </div>
                            </div>

                            <div className="form-item col-6 padd-15">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Email*"/>
                                </div>
                            </div>
                        </div>
                        <div className="row-contact">
                            <div className="form-item col-12 padd-15">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Position Looking for*"/>
                                </div>
                            </div>
                        </div>
                        <div class="contact-sub">
                            <div className="row-contact">
                                <div className="form-item col-12 padd-15">
                                    <div className="form-group">
                                        <input type="file" className="custom-file-input btn"/>
                                    </div>
                                </div>
                            </div>


                            <div className="row-contact">
                                <div className="col-12 padd-15">
                                    <button className="btn" type="submit">Submit</button>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </section>
        <FooterNew/>


    </>
  );
}

export default CareerPage;
