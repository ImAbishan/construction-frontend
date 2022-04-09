import React, { useState, useEffect } from "react";
import "./employeeReport.css";
import axios from "axios";
import ReactHTMLTableToExcel from "react-html-to-excel";

function AdminEmployeeReport() {
    const [userList, setUserList] = useState([]);

    const deleteUser = (id) => {
        axios.delete("http://localhost:5000/users/" + id).then(() => {
            window.location.reload(false);
        });
    };

    //useEffect is the react hook
    useEffect(() => {
        axios.get("http://localhost:5000/users").then((allUsers) => {
            setUserList(allUsers.data);
        });
    }, []);
    return (
        <>
            <div className="user-tabel">
                <ReactHTMLTableToExcel
                    className="btn-export-csv"
                    table="export-excel-employee-details"
                    filename="EmployeeDetails"
                    sheet="sheet"
                    buttonText="EXPORT"/>
                <table id="export-excel-employee-details">
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
                    {userList.map((users, key) => (
                        <tr>
                            <td>{users.orderNo}</td>
                            <td>{users.customerName}</td>
                            <td>{users.orderType}</td>
                            <td>{users.address}</td>
                            <td>{users.total}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default AdminEmployeeReport;
