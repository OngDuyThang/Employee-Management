import React from "react";
import './navbar.scss';
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <div className="navbarContainer">
            <h3>Employee Management App</h3>
            <span onClick={() => navigate("/list")}>Employees</span>
            <span onClick={() => navigate("/add")}>Add Employee</span>
        </div>
    )
}