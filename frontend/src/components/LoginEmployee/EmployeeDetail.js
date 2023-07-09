import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EmployeeDetails.css";

function EmployeeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/get/" + id)
      .then((res) => setEmployee(res.data.Result[0]))
      .catch((err) => console.log(err));
  }, []);

  const handleLogout = () => {
    axios
      .get("http://localhost:8081/logout")
      .then((res) => {
        navigate("/start");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <section className="vh-100 employee_details_main">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-md-9 col-lg-7 col-xl-5">
              <div className="employee_details_content">
                <div className=" p-4">
                  <div className="d-flex text-black">
                    <div className="flex-shrink-0">
                      <img
                        src={`http://localhost:8081/images/` + employee.image}
                        alt="Generic placeholder image"
                        className="img-fluid"
                        style={{ width: "180px", borderRadius: "50%" }}
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h3 className="mb-1">{employee.name}</h3>
                      <div className="d-flex justify-content-start rounded-3 p-2 mb-2 employee_name">
                        <div>
                          <h4 className="small text-muted mb-1">User Name</h4>
                          <h4 className="mb-0">{employee.email}</h4>
                        </div>
                        <div className="px-3">
                          <h4 className="small text-muted mb-1">Salary</h4>
                          <h4 className="mb-0">{employee.salary}</h4>
                        </div>
                      </div>
                      <div className="d-flex pt-1">
                        <button
                          type="button"
                          onClick={handleLogout}
                          className="btn btn-primary"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EmployeeDetail;
