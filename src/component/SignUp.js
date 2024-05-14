import React, { useState } from 'react';

function SignupPage() {
  const [username, setUsername] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [error, setError] = useState('');

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSignup = () => {
    if (!username || !contactNumber || !email || !password || !rePassword) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== rePassword) {
      setError('Passwords do not match');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must contain at least 8 characters, 1 number, 1 symbol, and 1 letter');
      return;
    }

    // If all validations pass, send data to PHP backend
    fetch('http://localhost/React-php/signup.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        contactNumber,
        email,
        password,
      }),
    })
    .then(response => response.text())
    .then(data => {  
      if (data === 'Contact number already exists') {
        alert(data);
        setUsername('');
        setContactNumber('');
        setEmail('');
        setPassword('');
        setRePassword('');}
        else {
          console.log(data); // Log the response from the backend
          // Handle success or error messages from the backend accordingly
        }
      // Log the response from the backend
      console.log(data);
      // Handle success
      if (data === "Signup successful") {
        // Clear all fields
        setUsername('');
        setContactNumber('');
        setEmail('');
        setPassword('');
        setRePassword('');
        // Show alert
        alert("Signup successful");
      } else {
        // Handle error messages
        setError(data);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle any errors that occur during the fetch operation
      setError("Error occurred during signup");
    });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Contact Number:</label>
          <input
            type="text"
            name="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Re-Enter Password:</label>
          <input
            type="password"
            name="repassword"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleSignup}>
          Sign Up
        </button>
      </form>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
}

export default SignupPage;
