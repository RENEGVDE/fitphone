import React, { useState, useEffect } from 'react';
import './Clock.css'
const Clock = ({ hour , min }) => {

  const [h, setH] = useState("");
  const [m, setM] = useState("");
  const [s, setS] = useState("");


  h=hour;
  m=min
  setInterval(()=>{
    
  },1000)
    return(
        <div className='clock-outer'>

        <div class="clock-container">
        
        <div class="clock-col">

        <p class="clock-hours clock-timer">{h}</p>

        <p class="clock-label">
            Hours
          </p>
        </div>
        <div class="clock-col">
            <p class="coma">:</p>
        </div>
        <div class="clock-col">

        <p class="clock-hours clock-timer">{m}</p>

        <p class="clock-label">
            Minutes
          </p>
        </div>
      </div>

        </div>
        
    )
}


export default Clock