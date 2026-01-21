import { useState, useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import "../styles/login.css";

export default function Login() {
  const { login } = useContext(EmployeeContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!login(email, password)) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="login-box">
      <h2>Employee Management</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
        <button>Login</button>
      </form>
     <p style={{fontSize:"14px",color:"White"}}>
      Only aythorized HR can login
     </p>
    </div>
  );
}
