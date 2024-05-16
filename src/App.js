import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import About from './component/About';
import ContactUs from './component/ContactUs';
import SignUpPage from './component/SignUp';
import AddRoomPage from './component/addroom';
import Team from './component/Team';
import Loginu from'./component/loginu';
import Adminlogin from './component/Adminlogin';
import AdminSignUp from './component/AdminSignUp';
//import ForgotPassword from './component/ForgotPassword'
//import ResetPassword from './component/ResetPassword';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
//     < ResetPassword/>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/addroom" element={<AddRoomPage />} />
          <Route path="/team" element={<Team/>} /> 
          <Route path="/loginu" element={<Loginu/>} />
          <Route path="/adminsignup" element={<AdminSignUp />} />
          <Route path="/adminlogin" element={<Adminlogin/>} />
       //   <Route path="/forgotpassword" component={ForgotPassword} />
       // <Route path="/reset-password/:token" component={ResetPassword} />

          {/* Add more routes for other pages/components */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
