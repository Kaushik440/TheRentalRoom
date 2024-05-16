import React from 'react';
import kaushikp from './images/Kaushik.jpg';
import Shobhit from './images/shobhit.jpg';
import Durgesh from './images/durgesh.jpg';
import Ankita from './images/Ankita.jpg';
import './Team.css';

function Team() {
  return (
    <div>
      <div className="containerteam1">
    <p className="teamheada">Our Team</p>
      <p className='description'>Meet our amazing team members...</p>
<div className="contentbox">
    <div className="box">
        <div className="imgBx">
            <img src={kaushikp} alt="Placeholder Image"/>
        </div>
        <div className="containerteam">
            <h2 className='teamName'>Kaushik Pandey</h2>
            <span >Front end developer</span>
        </div>
    </div>

    <div className="box">
        <div className="imgBx">
            <img src={Shobhit}alt="Placeholder Image"/>
        </div>
        <div className="containerteam">
            <h2 className='teamName'>Shobhit Singh</h2>
            <span >Backend Developer</span>
        </div>
    </div>

    <div className="box">
        <div className="imgBx">
            <img src={Durgesh} alt="Placeholder Image"/>
        </div>
        <div className="containerteam">
            <h2 className='teamName'>Durgesh Pandey</h2>
            <span> Frontend Developer</span>
        </div>
    </div>

    <div className="box">
        <div className="imgBx">
            <img src={Ankita} alt="Placeholder Image"/>
        </div>
        <div className="containerteam">
            <h2 className='teamName'>Ankita</h2>
            <span>Backend Developer</span>
        </div>
    </div>
</div>
</div>
    </div>
  );
}

export default Team;
