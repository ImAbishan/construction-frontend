import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyA7EZfcmoGZy7xNQgb8d9ruxec92Ph4U0w",
    authDomain: "innovay-construction.firebaseapp.com",
    projectId: "innovay-construction",
    storageBucket: "innovay-construction.appspot.com",
    messagingSenderId: "1094926220251",
    appId: "1:1094926220251:web:bf4d6d7bd79a13a57985fe",
    measurementId: "G-VXGWSFL1FQ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

