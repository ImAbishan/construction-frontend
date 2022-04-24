import React, { useState, useEffect } from "react";
import "./userResponse.css";
import axios from "axios";
import ReactHTMLTableToExcel from "react-html-to-excel";
import {doc ,setDoc, addDoc, collection, serverTimestamp,query, orderBy, onSnapshot} from "firebase/firestore"
import {db} from "../../../../fire";



function UserResponse(){

    const [articles,setArticles] = useState([]);

    useEffect(() => {
        const articleRef = collection(db, "Vavancies");
        const q  = query(articleRef, orderBy("createdAt", "desc"));
        onSnapshot(q, (snapshot) => {
            const articles = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setArticles(articles);
            console.log(articles);
        });
    },[]);



        return (
            <>
            <div className="user-tabel">
                <ReactHTMLTableToExcel
                    className="btn-export-csv"
                    table="user-response"
                    filename="UserResponses"
                    sheet="sheet"
                    buttonText="EXPORT"/>
                <table id="user-response">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Position</th>
                        <th>File</th>
                    </tr>
                    </thead>
                    <tbody>
                    {articles.map(({id,name,email,position,imageUrl}) => (
                        <tr>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{position}</td>
                            {/*<td>{imageUrl}</td>*/}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
        )
}
 

export default UserResponse;
