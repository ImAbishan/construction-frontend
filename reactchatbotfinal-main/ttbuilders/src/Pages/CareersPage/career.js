import React, {Component, useEffect, useState} from "react";
import axios from "axios";
import "./career.css";
import NavigationBar from "../../Components/NavigationBar/navbar.js";
import SimpleForm from "../../componentsChat/SimpleForm";
import Logo from "../../assets/Images/ca.png"
import FooterNew from "../../Components/FooterNew/footerNew";
import {doc ,setDoc, addDoc, collection, serverTimestamp, Timestamp} from "firebase/firestore"
import {db,storage} from "../../fire";
import {ref , uploadBytesResumable, getDownloadURL} from "firebase/storage";
import toast from "bootstrap/js/src/toast";

function CareerPage() {

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        position:"",
        createdAt: Timestamp.now().toDate(),
    })

    const handleChange = (e) => {
      setFormData({...formData,[e.target.name]: e.target.value });
    }

    const handleSubmit = () => {
      if (!formData.name || !formData.email || !formData.position){
          alert("Please Fill Fields")
          return;
      }
      
        const name = new Date().getTime() + file.name;
        console.log(name);
        const storageRef = ref(storage, name);
        const uploadFile = uploadBytesResumable(storageRef,file)
        uploadFile.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                        break;
                }
            },
            (err) =>{
                console.log(err)
            },
            ()=>{
            setFormData({
                name:"",
                email:"",
                position: "",
                createdAt: "",
            });

            getDownloadURL(uploadFile.snapshot.ref)
                .then((url)=>{
                    const articleRef = collection(db,"Vavancies");
                    addDoc(articleRef,{
                        name:formData.name,
                        email:formData.email,
                        position: formData.position,
                        createdAt: Timestamp.now().toDate(),

                    })
                        .then(()=>{
                            toast("Response Added", {tye: "success"})
                        })
                        .catch((err) =>{
                            toast("Error Adding Response", {tye: "error"})
                        })
                })
            }
        );
    }
    const [file, setFile] = useState("")
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [position,setPosition] = useState('');

    useEffect(() => {
        const uploadFile = () => {
            const name = new Date().getTime() + file.name;
            console.log(name);
            const storageRef = ref(storage, name);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                        default:
                            break;
                    }
                },
                (error) => {
                console.log(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log('File available at', downloadURL);
                    });
                }
            );
        };
        file && uploadFile();
    },[file]);

    const handleAdd = async (e) => {
      e.preventDefault()
        try {
            const res =   await addDoc(collection(db,"Vacancy Application","New"),
                {
                    name:"",
                    email:"",
                    position:"",
                    timeStamp:serverTimestamp(),
                });
        }
        catch (err){
          console.log(err);
        }

    }

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
                        <form >
                            <div className="row-contact">
                                <div className="form-item col-6 padd-15">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            placeholder="Name*"
                                            value={formData.name}
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                </div>

                                <div className="form-item col-6 padd-15">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="email"
                                            placeholder="Email*"
                                            value={formData.email}
                                            onChange={(e) => handleChange(e)}
                                            />
                                    </div>
                                </div>
                            </div>
                            <div className="row-contact">
                                <div className="form-item col-12 padd-15">
                                    <div className="form-group">
                                        <input type="text"
                                               name="position"
                                               className="form-control"
                                               placeholder="Position Looking for*"
                                               value={formData.position}
                                               onChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="contact-sub">
                                <div className="row-contact">
                                    <div className="form-item col-12 padd-15">
                                        <div className="form-group">
                                            <input
                                                type="file"
                                                className="custom-file-input btn"
                                                id="file"
                                                onChange={(e) => setFile(e.target.files[0])}/>
                                        </div>
                                    </div>
                                </div>


                                <div className="row-contact">
                                    <div className="col-12 padd-15">
                                        <button className="btn" type="submit" onClick={handleSubmit}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>




                    </div>
                </div>
            </div>
        </section>
        <FooterNew/>


    </>
  );
}

export default CareerPage;
