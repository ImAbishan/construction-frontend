import React from 'react';
import Adminnavbar from "../../Components/AdminNavbar/adminnavbar";
import "../Report/adminReport.css"
import AdminEmployeeReport from "../../Components/ReportDetails/employeeReport";

function AdminReports() {
    return (
        <>
            <Adminnavbar/>
            <AdminEmployeeReport/>
        </>

    );
}

export default AdminReports;
