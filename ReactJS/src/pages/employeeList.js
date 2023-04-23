import React from "react";
import './employeeList.scss';
import Navbar from "../components/navbar";

export default function EmployeeList() {
    return (
        <>
            <Navbar />
            <div className="employeeListContainer">
                <h2>Employees List</h2>
                <div className='btn add'>Add Employee</div>
                <table>
                    <tr>
                        <th className="short">Firstname</th>
                        <th className="short">Lastname</th>
                        <th className="long">Email</th>
                        <th className="long">Actions</th>
                    </tr>
                    <tr>
                        <td>john</td>
                        <td>john</td>
                        <td>john</td>
                        <td className="btns">
                            <div className="btn delete">Delete</div>
                            <div className="btn update">Update</div>
                        </td>
                    </tr>
                </table>
            </div>
        </>
    )
}