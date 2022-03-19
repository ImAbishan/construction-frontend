import React, {Component, useState} from "react";
import "./contact.css";
import NavigationBar from "../../Components/NavigationBar/navbar.js";
import ContactService from "../../services/contact.service";

class ContactPage extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message:''
        };
        this.newInfo = this.newInfo.bind(this);
        this.saveInfo = this.saveInfo.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeSubject = this.onChangeSubject.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
    }

    onChangeName(e){
        this.setState({
            name: e.target.value
        });
    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value
        });
    }

    onChangeSubject(e){
        this.setState({
            subject: e.target.value
        });
    }

    onChangeMessage(e){
        this.setState({
            message: e.target.value
        });
    }

    saveInfo(){
        var data = {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        };

        ContactService.create(data)
            .then(response =>{
                this.setState({
                    name: response.data.name,
                    email: response.data.email,
                    subject: response.data.subject,
                    message: response.data.message,

                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e)
                }
            );
    }

    newInfo(){
        this.setState({
            name: '',
            email: '',
            subject: '',
            message:''

        });
    }

    // handleSubmit(event) {
    //     event.preventDefault();
    //     fetch('localhost:9090/api/usr-mgt/contact', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             name: this.state.name,
    //             email: this.state.email,
    //             subject: this.state.subject,
    //             message: this.state.message
    //         }),
    //         headers: {
    //             "Content-type": "application/json; charset=UTF-8"
    //         }
    //     }).then(response => {
    //         if(response.status === 200) {
    //             alert("Response Send");
    //             window.location.href = '/home';
    //         }
    //     });
    // }
    render() {
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
                                            <input type="text"
                                                   defaultValue={this.state.name}
                                                   onChange={this.onChangeName}
                                                   class="form-control"
                                                   placeholder="Name*"/>
                                        </div>
                                    </div>

                                    <div class="form-item col-6 padd-15">
                                        <div class="form-group">
                                            <input type="text"
                                                   defaultValue={this.state.email} onChange={this.onChangeEmail}
                                                   class="form-control" placeholder="Email*"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="row-contact">
                                    <div class="form-item col-12 padd-15">
                                        <div class="form-group">
                                            <input type="text" defaultValue={this.state.subject} onChange={this.onChangeSubject}
                                                   class="form-control" placeholder="Subject*"/>
                                        </div>
                                    </div>
                                </div>

                                <div class="row-contact">
                                    <div class="form-item col-12 padd-15">
                                        <div class="form-group">
                                            <textarea name="" placeholder="Message*" defaultValue={this.state.message} onChange={this.onChangeMessage}
                                                      class="form-control"></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div class="row-contact">
                                    <div class="col-12 padd-15">
                                        <button class="btn" type="submit" value="submit" onClick={this.saveInfo}>Send Message</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

            </>
        );
    }
}

export default ContactPage;
