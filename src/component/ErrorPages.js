// ErrorPage.js
import React from "react";
import './ErrorPageS.css';
import errorImage from './images/error.png'; // Replace with your actual image file path

const ErrorPage = () => {
  return (
    <div className="containererrors">
      <img src={errorImage} alt="Error" className="error-image" />
      <h2>Oops! Something went wrong.</h2>
      <p>Please try again later or contact support.</p>
    </div>
  );
};

export default ErrorPage;
