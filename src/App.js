import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import About from './component/About';
import ContactUs from './component/ContactUs';
import Team from './component/Team';
import Home from './component/Home';
import SignUpPage from './component/SignUp';
import LoginPage from './component/loginc';
import AddRoomPage from './component/addroom';
import './App.css';


function App() {
  return (
    <div >
      <Header/>
      <AddRoomPage/>
      <Footer/>
    </div>
  );
}

export default App;
