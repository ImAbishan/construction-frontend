import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyA-z3LqD0FJ40jCjjLSRNI1P6ElAs8A4ow",
    authDomain: "tt-builders-auth.firebaseapp.com",
    projectId: "tt-builders-auth",
    storageBucket: "tt-builders-auth.appspot.com",
    messagingSenderId: "90421162718",
    appId: "1:90421162718:web:d6a229be4e148193ed484f"
};

const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);