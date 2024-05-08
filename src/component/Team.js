import React from 'react';
import kaushikp from './images/Home.jpg';
import './Team.css';

function Team() {
  return (
    <div>
      <h2>Our Team</h2>
      <p>Meet our amazing team members...</p>
      <div class="containerteam1">
    <p class="teamheada">Web Development Team</p>
<div class="contentbox">
    <div class="box">
        <div class="imgBx">
            <img src={kaushikp} alt="Placeholder Image"/>
        </div>
        <div class="containerteam">
            <h2>Kaushik Pandey</h2>
            <span>Web Designer/</span>
        </div>
    </div>

    <div class="box">
        <div class="imgBx">
            <img src="IMG-20240314-WA0223.jpg" alt="Placeholder Image"/>
        </div>
        <div class="containerteam">
            <h2>Kaushik Pandey</h2>
            <span>Web Designer</span>
        </div>
    </div>

    <div class="box">
        <div class="imgBx">
            <img src="IMG-20240314-WA0223.jpg" alt="Placeholder Image"/>
        </div>
        <div class="containerteam">
            <h2>Kaushik Pandey</h2>
            <span>Web Designer</span>
        </div>
    </div>

    <div class="box">
        <div class="imgBx">
            <img src="IMG-20240314-WA0223.jpg" alt="Placeholder Image"/>
        </div>
        <div class="containerteam">
            <h2>Kaushik Pandey</h2>
            <span>Web Designer</span>
        </div>
    </div>
</div>
</div>
    </div>
  );
}

export default Team;
