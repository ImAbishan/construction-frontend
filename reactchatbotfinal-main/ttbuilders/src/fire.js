import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyA-z3LqD0FJ40jCjjLSRNI1P6ElAs8A4ow",
    authDomain: "tt-builders-auth.firebaseapp.com",
    projectId: "tt-builders-auth",
    storageBucket: "tt-builders-auth.appspot.com",
    messagingSenderId: "90421162718",
    appId: "1:90421162718:web:d6a229be4e148193ed484f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);