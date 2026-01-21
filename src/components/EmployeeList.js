import { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

export default function EmployeeList({ setEditData }) {
  const { employees, deleteEmployee } = useContext(EmployeeContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th><th>Role</th><th>Salary</th><th>Action</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(emp => (
          <tr key={emp.id}>
            <td>{emp.name}</td>
            <td>{emp.role}</td>
            <td>{emp.salary}</td>
            <td>
              <button onClick={() => setEditData(emp)}>Edit</button>
              <button onClick={() => deleteEmployee(emp.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
