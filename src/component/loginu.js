import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
const Login = () => {
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost/React-php/loginu.php', {
        contact_number: contactNumber,
        password: password,
      });

      if (response.data.message === 'Login successful') {
        window.location.href = 'http://localhost:3000';
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Contact Number</label>
          <input
            type="text"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        <Link to="/signup">
            SignUp
          </Link>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
