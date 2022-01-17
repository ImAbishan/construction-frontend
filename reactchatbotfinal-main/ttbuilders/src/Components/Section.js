import React from 'react';
import {Button} from './Button'
import './Section.css'
import '../App.css'

function Section() {
    return (
        
        <div className= 'hero-container'>
 <video src='/videos/video-1.mp4' autoPlay loop muted />  
        <h1>Welcome to Amana's Life Planner </h1>
<p> Financial Calculators  </p>       

<div className = 'hero-btns'>

    <Button 
className = 'btns'
buttonStyle='btn--outline'
buttonSize = 'btn--large'>

GET STARTED


    </Button>


    <Button
   type='button'
   onClick={(e) => {
       e.preventDefault();
       window.location.href='https://chats.landbot.io/v3/H-950015-2RVWGR68YBFSB1JB/index.html'
   }}
className = 'btns'
buttonStyle='btn--primary'
buttonSize = 'btn--large'>
Register
 <i className = 'fa-comment' />



    </Button>
</div>
        </div>
    )
}

export default Section