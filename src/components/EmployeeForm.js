import { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

export default function EmployeeForm({ editData, setEditData }) {
  const { addEmployee, updateEmployee } = useContext(EmployeeContext);

  const [emp, setEmp] = useState({ name: "", role: "", salary: "" });

  useEffect(() => {
    if (editData) setEmp(editData);
  }, [editData]);

  const submit = (e) => {
    e.preventDefault();
    editData ? updateEmployee(emp) : addEmployee(emp);
    setEmp({ name: "", role: "", salary: "" });
    setEditData(null);
  };

  return (
    <form className="form" onSubmit={submit}>
      <input placeholder="Name" value={emp.name}
        onChange={(e)=>setEmp({...emp,name:e.target.value})}/>
      <input placeholder="Role" value={emp.role}
        onChange={(e)=>setEmp({...emp,role:e.target.value})}/>
      <input placeholder="Salary" value={emp.salary}
        onChange={(e)=>setEmp({...emp,salary:e.target.value})}/>
      <button>{editData ? "Update" : "Add"}</button>
    </form>
  );
}
