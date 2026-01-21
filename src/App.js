import { useContext } from "react";
import { EmployeeContext } from "./context/EmployeeContext";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const { user } = useContext(EmployeeContext);
  return user ? <Dashboard /> : <Login />;
}

export default App;
