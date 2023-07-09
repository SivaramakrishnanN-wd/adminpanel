import React from "react";
import { useNavigate } from "react-router-dom";
import "./start.css";

export default function Start() {
  const navigate = useNavigate();
  return (
    <div className="start_main">
      <div className="start_sub">
        <h2 className="start_head">Login As</h2>
        <div className="start_login_option">
          <button
            className="start_employee"
            onClick={(e) => navigate("/employeelogin")}
          >
            Employee
          </button>
          <button className="start_admin" onClick={(e) => navigate("/login")}>
            Admin
          </button>
        </div>
      </div>
    </div>
  );
}
