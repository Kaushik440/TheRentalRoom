import React, { useState } from "react";
import { GoogleLogin } from 'react-google-login';
import { Link, useHistory } from "react-router-dom";
const clientId="777737467772-qg0qesg1hn06apa9auclcja149nbdhob.apps.googleusercontent.com";

const onSuccess =(response) =>{
  console.log("login SUCCESS");
}
const onFailure =(res) =>{
  console.log("login FAILED");
}
const LoginPage = () => {
  const [formData, setFormData] = useState({
    emailOrContact: "",
    password: "",
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
    console.log("Forgot Password");
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">User Login</h2>
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
        <button type="submit" className="login-button">
          Login
        </button>
        <p className="login-link">
          <a href="/signup">Sign Up</a> |{" "}
          <a href="#" onClick={handleForgotPassword}>
            Forgot Password?
          </a>
        </p>
        <p>
          Login as Room Owner{" "}
          <Link to="/owner-login" className="aclogin">Login</Link>
        </p>
        <div id='signInButtonGoogle'>
            <GoogleLogin
            clientId={clientId}
            buttonText="LoginWithGoogle"
            onSuccess ={onSuccess}
            onFailure={onFailure}
            cookiesPolicy={'single_host_origin'}
            isSignedIn={true}
            />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
