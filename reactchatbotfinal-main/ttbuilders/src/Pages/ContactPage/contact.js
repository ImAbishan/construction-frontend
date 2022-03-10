import React, {Component, useState} from "react";
import axios from "axios";
import "./contact.css";
import NavigationBar from "../../Components/NavigationBar/navbar.js";

function ContactPage() {
    return (
        <>
            <NavigationBar/>
            <section class="contact section" id="contact">
                <div class="container">
                    <div class="row-contact">
                        <div class="contact-info-item padd-15">
                            <div class="icon"><i class="bx bx-phone"></i></div>
                            <h4>Call Us On</h4>
                            <p>0094 776 474 924</p>
                        </div>

                        <div class="contact-info-item padd-15">
                            <div class="icon"><i class="bx bxs-map"></i></div>
                            <h4>Address</h4>
                            <p>Colombo, Sri Lanka.</p>
                        </div>

                        <div class="contact-info-item padd-15">
                            <div class="icon"><i class='bx bx-mail-send'></i></div>
                        <h4>Email</h4>
                        <p>ttbuilders@info.com</p>
                    </div>
                </div>

                <div class="row-contact">
                    <div class="contact-form padd-15">
                        <div class="row-contact">
                            <div class="form-item col-6 padd-15">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Name*"/>
                                </div>
                            </div>

                            <div class="form-item col-6 padd-15">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Email*"/>
                                </div>
                            </div>
                        </div>
                        <div class="row-contact">
                            <div class="form-item col-12 padd-15">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Subject*"/>
                                </div>
                            </div>
                        </div>

                        <div class="row-contact">
                            <div class="form-item col-12 padd-15">
                                <div class="form-group">
                                    <textarea name="" placeholder="Message*" class="form-control"></textarea>
                                </div>
                            </div>
                        </div>

                        <div class="row-contact">
                            <div class="col-12 padd-15">
                                <button class="btn" type="submit">Send Message</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        </>
    );
}

export default ContactPage;
