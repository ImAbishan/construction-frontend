import React, { useState, useEffect } from "react";
import "./showEmployees.css";
import axios from "axios";
import ReactHTMLTableToExcel from "react-html-to-excel";

function AdminEmployeesPage() {
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
                    table="export-excel-employee"
                    filename="EmployeeDetails"
                    sheet="sheet"
                    buttonText="EXPORT"/>
                <table id="export-excel-employee">
                    <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Name</th>
                        <th>Mobile Number</th>
                        <th>Location</th>
                        {/*<th>Total</th>*/}
                        {/*<th>Action</th>*/}
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>001</td>
                            <td>Abishan</td>
                            <td>02654646</td>
                            <td>Vavuniya</td>
                        </tr>

                        <tr>
                            <td>002</td>
                            <td>Test User</td>
                            <td>02654646</td>
                            <td>Vavuniya</td>
                        </tr><tr>
                            <td>003</td>
                            <td>Test</td>
                            <td>02654646</td>
                            <td>Vavuniya</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </>
    );
}

export default AdminEmployeesPage;
