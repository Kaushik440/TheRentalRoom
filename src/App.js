import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/Home";
import About from "./component/About";
import ContactUs from "./component/ContactUs";
import SignUpPage from "./component/SignUp";
import AddRoomPage from "./component/addroom";
import Team from "./component/Team";
import Loginu from "./component/loginu";
import Adminlogin from "./component/Adminlogin";
import AdminSignUp from "./component/AdminSignUp";
import SearchResultsPage from "./component/SearchResultsPage"; // New component for displaying search results
import FAQ from "./component/Faqs"; // New component for FAQs
import CareerPage from "./component/Careers"; // New component for Careers
import TermsAndConditions from "./component/TermsAndConditions"; // New component for Terms and Conditions
import ErrorPage from "./component/ErrorPages";
import PrivacyPolicy from "./component/PrivacyPolicy"; // New component for Privacy Policy
import MyListingsu from "./component/MyListingsu"; // New component for My Listings

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-results" element={<SearchResultsPage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/addroom" element={<AddRoomPage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/careers" element={<CareerPage />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />

          <Route path="/loginu" element={<Loginu />} />
          <Route path="/adminsignup" element={<AdminSignUp />} />
          <Route path="/adminlogin" element={<Adminlogin />} />
          <Route path="/mylistingsu" element={<MyListingsu />} />


          {/* Add more routes for other pages/components */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
