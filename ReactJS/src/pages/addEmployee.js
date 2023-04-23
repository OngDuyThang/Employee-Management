import React from "react";
import './addEmployee.scss';
import Navbar from "../components/navbar";

export default function AddEmployee() {
    return (
        <>
            <Navbar />
            <div className="addEmployeeContainer">
                <h2>Add Employee</h2>
                <div className="row">
                    <span>First Name:</span>
                    <input type="text" placeholder="First Name" />
                </div>
                <div className="row">
                    <span>Last Name:</span>
                    <input type="text" placeholder="Last Name" />
                </div>
                <div className="row">
                    <span>Email:</span>
                    <input type="text" placeholder="Email" />
                </div>
                <div className="btns">
                    <div className="btn save">Save</div>
                    <div className="btn cancel">Cancel</div>
                </div>
            </div>
        </>
    )
}