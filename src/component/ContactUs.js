import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
   <>
   <div class="containercontactform">
      <form id="contactForm" onsubmit="submitForm(event)">
        <h2><u>Contact Us</u></h2>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label for="contactNumber">Contact Number:</label>
        <input type="text" id="contactNumber" name="contactNumber" required />

        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Submit</button>
      </form>

      <div id="response"></div>
    </div>
   


   
   </>
  );
}

export default ContactUs;
