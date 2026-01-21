import { createContext, useState, useEffect } from "react";

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("employees"));
    if (data) setEmployees(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const login = (email, password) => {
    if (email === "swapnalipawar@gmail.com" && password === "1234") {
      setUser({ email });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  const addEmployee = (emp) => {
    setEmployees([...employees, { ...emp, id: Date.now() }]);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(e => e.id !== id));
  };

  const updateEmployee = (updatedEmp) => {
    setEmployees(
      employees.map(emp =>
        emp.id === updatedEmp.id ? updatedEmp : emp
      )
    );
  };

  return (
    <EmployeeContext.Provider value={{
      user,
      login,
      logout,
      employees,
      addEmployee,
      deleteEmployee,
      updateEmployee
    }}>
      {children}
    </EmployeeContext.Provider>
  );
};
