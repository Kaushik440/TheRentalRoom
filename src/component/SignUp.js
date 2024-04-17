import React, { useState } from 'react';
import './Header.css';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    securityQuestion: '',
    newPassword: '',
    confirmPassword: '',
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

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      contactNumber: '',
      securityQuestion: '',
      newPassword: '',
      confirmPassword: '',
    });
  };

  const { newPassword, confirmPassword } = formData;

  // Validate passwords match
  const passwordsMatch = newPassword === confirmPassword;

  return (
      <div>
        <h2 id="SignH">Sign Up</h2>
        <form onSubmit={handleSubmit} className='SignUp1'>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            ContactNumber:
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            New Password:
            <br/>
            <input
              type="password"
              name="newPassword"
              value={newPassword}
              onChange={handleChange}
            />
          </label>
          <label>
            Confirm Password:
            <br/>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              style={{ borderColor: passwordsMatch ? 'green' : 'red' }}
            />
            {!passwordsMatch && <p>Passwords do not match!</p>}
          </label>
          <label>
            Security Question:
            <br/>
            <select
            id="secQue"
              name="securityQuestion"
              value={formData.securityQuestion}
              onChange={handleChange}
            >
              <option value="">-- Select One --</option>
              <option value="What is your mother's maiden name?">
                What is your mother's maiden name?
              </option>
              <option value="What city were you born in?">
                What city were you born in?
              </option>
              <option value="What is your favorite food?">
                What is your favorite food?
              </option>
            </select>
          </label>
          <br/>
          <button type="submit" className='buttonsignUp' disabled={!passwordsMatch}>
            Submit
          </button>
          <button type="button" className='buttonsignUp' onClick={handleReset}>
            Reset
          </button>
          <p>
            Already have an account? <a href="/login"><span className='aclogin'>Login</span></a>
          </p>
        </form>
      </div>
  );
};

export default SignUpPage;
