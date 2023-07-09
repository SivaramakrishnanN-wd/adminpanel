import Dashboard from "./components/Admin/Dashboard";
import AddEmployee from "./components/Employees/AddEmployee";
import EditEmployee from "./components/Employees/EditEmployee";
import "./components/Employees/Employee.css";
import Home from "./components/Employees/HomeComponent";
import Login from "./components/Admin/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./components/Start/start";
import EmployeeDetail from "./components/LoginEmployee/EmployeeDetail";
import EmployeeLogin from "./components/LoginEmployee/EmployeeLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<AddEmployee />} />
          <Route path="/employeeEdit/:id" element={<EditEmployee />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/start" element={<Start />} />
        <Route path="/employeedetail/:id" element={<EmployeeDetail />} />
        <Route path="/employeelogin" element={<EmployeeLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
