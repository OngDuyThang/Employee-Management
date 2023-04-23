import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import EmployeeList from "../src/pages/employeeList";
import AddEmployee from "../src/pages/addEmployee";
// https://www.javaguides.net/2019/01/spring-boot-microsoft-sql-server-jpa-hibernate-crud-restful-api-tutorial.html
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 👇️ redirect to /home when user goes to / */}
        <Route path="/" element={<Navigate to="/list" />} />
        <Route path="/list" element={<EmployeeList />} />
        <Route path="/add" element={<AddEmployee />} />
        {/* 👇️ only match this when no other routes match */}
        <Route
          path="*"
          element={
            <div>
              <h1>404 Page not found</h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
};