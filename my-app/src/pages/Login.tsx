import React, { useState } from "react";
// import './Auth.css';
import "./UploadPrescription";
import { useNavigate, Link } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // You can replace this with actual API/auth logic
    console.log("Logging in with:", { email, password });
    navigate("/"); // Redirect to homepage after login
  };

  return (
    <div className="upload-container">
      <form className="form-section" onSubmit={handleLogin}>
        <h2 className="heading">Login</h2>
        <div className="grid-2">
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="grid-2">
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-btn-U">
          Login
        </button>
        <p>
          Don’t have an account?{" "}
          <Link to="/signup" style={{ color: "blue" }}>
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
