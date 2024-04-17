import React from 'react';
import './Header.css';
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
     crossorigin="anonymous" referrerpolicy="no-referrer" />

function Header() {
  return (
    <header>
    <div class="login">
    <a href="loginc.html" >Login/Sign In</a>
  </div>
    
     <nav>
         <a href="home.html" class="active">Home</a>
         <a href="#">Save</a>
         <a href="about.html">About</a>
         <a href="ContactUs.html">Contact</a>
         <div class="search-container">
             <label for="city">City:</label>
             <select id="city" name="city">
             <option value="">-- Select City --</option>
                <option value="Gorakhpur">Gorakhpur</option>
                <option value="Deoria">Deoria</option>
                <option value="Basti">Basti</option>
                <option value="Lucknow">Lucknow</option>
                <option value="Delhi">Delhi</option>
                
                 // Add more cities as needed 
             </select>
             <label for="roomType">Room Type:</label>
             <select id="roomType" name="roomType">
             <option value="">-- Select RoomType --</option>
              <option value="1bhkR">1BHKRoom</option>
              <option value="2bhkR">2BHKRoom</option>
              <option value="1bhkF">1BHK Flate</option>
              <option value="2bhkF">2BHK Flate</option>
              <option value="PG">PG</option>
              <option value="Villa">Villa</option>
             </select>
             <button onclick="searchRooms()">Search</button>
         </div>
     </nav>
     </header>
  );
}

export default Header;
