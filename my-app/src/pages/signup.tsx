import React, { useState } from 'react';
import './UploadPrescription.css';
import { useNavigate, Link } from 'react-router-dom';

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Add real API request here
    console.log('Signing up with:', { name, email, password });
    navigate('/'); // Redirect to homepage after signup
  };

  return (
    <div className="upload-container">
      <form className="form-section" onSubmit={handleSignup}>
        <h2 className='heading'>Sign Up</h2>
        <input
          type="text"
          placeholder="Full Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="submit-btn-U">Create Account</button>
        <p>Already have an account? <Link to="/login" style={{ color: "blue" }}>Login</Link></p>
      </form>
    </div>
  );
};

export default Signup;
