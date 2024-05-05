import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const clientId = "777737467772-qg0qesg1hn06apa9auclcja149nbdhob.apps.googleusercontent.com";

function Logino() {
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

    const onSuccess = (res) => {
        console.log("login SUCCESS");
    }

    const onFailure = (res) => {
        console.log("login FAILED");
    }

    const handleForgotPassword = () => {
        // Add logic to handle forgot password functionality
        console.log("Forgot Password");
    };

    return (
        <div>
            <div id='signInButton'>
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Login with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiesPolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            </div>
            <div>
                <p>Or sign up with email/contact and password:</p>
                <form onSubmit={handleSubmit}>
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
                    <Link to="/signup">
                        <button className="signup-button">Sign Up</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Logino;

