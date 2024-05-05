import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import About from './component/About';
import ContactUs from './component/ContactUs';
import LoginPagec from './component/loginc';
import SignUpPage from './component/SignUp';
import AddRoomPage from './component/addroom';
import Team from './component/Team';
import Logino  from './component/logino';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<LoginPagec />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/addroom" element={<AddRoomPage />} />
          <Route path="/team" element={<Team/>} />
          <Route path="/owner-login" element={<Logino />} />
          {/* Add more routes for other pages/components */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
