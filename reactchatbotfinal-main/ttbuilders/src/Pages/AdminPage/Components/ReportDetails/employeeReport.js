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
                        <tr>
                            <td>001</td>
                            <td>Test</td>
                            <td>02654646</td>
                            <td>Galle</td>
                            <td>1 Years</td>
                        </tr>

                        <tr>
                            <td>002</td>
                            <td>MS</td>
                            <td>02654646</td>
                            <td>Kandy</td>
                            <td>3 Years</td>
                        </tr>

                        <tr>
                            <td>003</td>
                            <td>Sanga</td>
                            <td>02654646</td>
                            <td>Colombo</td>
                            <td>3 Years</td>
                        </tr>

                        <tr>
                            <td>004</td>
                            <td>Thara</td>
                            <td>02654646</td>
                            <td>Vavuniya</td>
                            <td>6 Years</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default AdminEmployeeReport;
