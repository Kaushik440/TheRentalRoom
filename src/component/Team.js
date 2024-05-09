import React from 'react';
import kaushikp from './images/Kaushik.jpg';
import Shobhit from './images/shobhit.jpg';
import Durgesh from './images/durgesh.jpg';
import './Team.css';

function Team() {
  return (
    <div>
      <div class="containerteam1">
    <p class="teamheada">Our Team</p>
      <p className='description'>Meet our amazing team members...</p>
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
            <img src={Shobhit}alt="Placeholder Image"/>
        </div>
        <div class="containerteam">
            <h2>Shobhit Singh</h2>
            <span>Web Designer</span>
        </div>
    </div>

    <div class="box">
        <div class="imgBx">
            <img src={Durgesh} alt="Placeholder Image"/>
        </div>
        <div class="containerteam">
            <h2>Durgesh Pandey</h2>
            <span>Web Designer</span>
        </div>
    </div>

    <div class="box">
        <div class="imgBx">
            <img src="IMG-20240314-WA0223.jpg" alt="Placeholder Image"/>
        </div>
        <div class="containerteam">
            <h2>Ankita</h2>
            <span>Web Designer</span>
        </div>
    </div>
</div>
</div>
    </div>
  );
}

export default Team;
