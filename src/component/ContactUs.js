import React, { useState } from 'react';
import './ContactUs.css';

function ContactUs() {
  const [successMessage, setSuccessMessage] = useState('');
  
  const submitForm = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    fetch('http://localhost/React-php/submitcontactform.php', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.text())
    .then(data => {
      // Assuming the response is a success message
      setSuccessMessage(data);
      // Clearing form fields
      event.target.reset();
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="containercontactform">
      <form id="contactForm" onSubmit={submitForm}>
        <h2><u>Contact Us</u></h2>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="contactNumber">Contact Number:</label>
        <input type="text" id="contactNumber" name="contactNumber" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Submit</button>
      </form>

      <div id="response">{successMessage}</div>
    </div>
  );
}

export default ContactUs;
