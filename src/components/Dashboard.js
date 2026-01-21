import { useContext, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";
import "../styles/dashboard.css";

export default function Dashboard() {
  const { logout } = useContext(EmployeeContext);
  const [editData, setEditData] = useState(null);

  return (
    <div className="dashboard">
      <h2>Employee Dashboard</h2>
      <button onClick={logout} className="logout">Logout</button>

      <EmployeeForm editData={editData} setEditData={setEditData} />
      <EmployeeList setEditData={setEditData} />
    </div>
  );
}
