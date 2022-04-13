import React, { useState, useEffect } from "react";
import "./userResponse.css";
import axios from "axios";
import ReactHTMLTableToExcel from "react-html-to-excel";



class UserResponse extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('localhost:9090/api/usr-mgt/contact')
        .then(response => {
            console.log(response)
            this.setState({ posts: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const {posts} = this.state
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
                        <th>Named</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Message</th>
                    </tr>
                    </thead>
                    <tbody>
                    {posts.map(post => (
                        <tr>
                            <td>{post.name}</td>
                            <td>{post.email}</td>
                            <td>{post.subject}</td>
                            <td>{post.message}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
        )
    }
}
 

export default UserResponse;
