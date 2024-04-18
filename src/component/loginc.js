import React, { useState } from 'react';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    emailOrContact: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log(formData);
  };

  const handleForgotPassword = () => {
    // Add logic to handle forgot password functionality
    console.log('Forgot Password');
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Login</h2>
      <form onSubmit={handleSubmit} className="login-formc">
        <label>
          Email/Contact:
          <input
            type="text"
            name="emailOrContact"
            value={formData.emailOrContact}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="login-button">Login</button>
        <p className="login-link">
          <a href="/signup">Sign Up</a> | <a href="#" onClick={handleForgotPassword}>Forgot Password?</a>
        </p>
        <button className="login-google-button">Login with Google</button>
      </form>
      
      
    </div>
  );
};

export default LoginPage;
