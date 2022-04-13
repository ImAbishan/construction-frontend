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
        axios.get('http://localhost:5000/users/')
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
                        <th>Employee Id</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Salary</th>
                        <th>Experience</th>
                    </tr>
                    </thead>
                    <tbody>
                    {posts.map(post => (
                        <tr>
                            <td>{post.employee_id}</td>
                            <td>{post.name}</td>
                            <td>{post.position}</td>
                            <td>{post.salary}</td>
                            <td>{post.experience}</td>
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
