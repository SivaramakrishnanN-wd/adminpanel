import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomeEmployee.css";

export default function Home() {
  const [adminCount, setAdminCount] = useState();
  const [employeeCount, setEmployeeCount] = useState();
  const [salary, setSalary] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/adminCount")
      .then((res) => {
        setAdminCount(res.data[0].admin);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:8081/employeeCount")
      .then((res) => {
        setEmployeeCount(res.data[0].employee);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:8081/salary")
      .then((res) => {
        setSalary(res.data[0].sumOfSalary);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8081/getEmployees")
      .then((res) => {
        if (res.data.Status === "Success") {
          setData(res.data.Result);
        }
      })
      .catch((err) => console.error(err));
  }, []);
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8081/delete/" + id)
      .then((res) => {
        if (res.data.Status === "Success") {
          window.location.reload(true);
        } else {
          alert("Error");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="main_home_component">
      <div className="p-3 d-flex justify-content-around">
        <div className="p-3 employee_all_details">
          <p>Admin</p>
          <hr />
          <p>Total :{adminCount}</p>
        </div>
        <div className="p-3 employee_all_details">
          <p>Employee</p>
          <hr />
          <p>Total :{employeeCount}</p>
        </div>
        <div className="p-3 employee_all_details">
          <p>Salary </p>
          <hr />
          <p>Total :{salary}</p>
        </div>
      </div>
      <div>
        <div className="px-5 py-3 d-flex justify-content-center mt-2">
          <div>
            <h3>Employee List</h3>
          </div>
        </div>
        <Link to="/create" className="btn btn-success">
          Add Employee
        </Link>
        <div className="employee_list">
          <table className="">
            <thead>
              <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Email</th>
                <th>Salary</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((employee, index) => {
                return (
                  <tr key="index">
                    <td>{employee.name}</td>
                    <td>
                      {
                        <img
                          src={"http://localhost:8081/images/" + employee.image}
                          alt=""
                          className="employee_image"
                        />
                      }
                    </td>
                    <td>{employee.email}</td>
                    <td>{employee.salary}</td>
                    <td>{employee.address}</td>
                    <td>
                      <Link
                        to={`/employeeEdit/` + employee.id}
                        className="btn btn-primary button btn-sm me-2"
                      >
                        Edit
                      </Link>

                      <button
                        className="btn btn-danger button mx-2"
                        onClick={(e) => handleDelete(employee.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
