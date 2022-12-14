import React from 'react'
import {Typography} from "@mui/material";
import './About.css';
import Navbar from '../Navbar/Navbar';
import child from '../Assets/white.jpg'


const About = () => {
  return (
    <div className='aboutcon'>
      <Navbar />

      <div >
          <img src={child} alt="logo" className='imgcon'/>
      </div>

      <div>
      <Typography className='highone'>
       <b>We are Investors Football Club.</b>  </Typography>  <br></br> <br></br>

       <Typography className='highone'>
Since 1892, we have brought a community together and our magnificent home - Eke field - has set the city's heart beating.  <br></br>

One city. United.   </Typography>  <br></br>

<Typography className='highone'>
    
Agbani is famed for many things. For the warmth of its people, for its industrial heritage, its culture, its nightlife, for its favourite sons and daughters of sport, screen and music and much, much more. <br></br> <br></br> </Typography>

<Typography className='highone'>
 But it is perhaps known best of all for its beloved football club and the club's incredible supporters.
</Typography>

      </div>

    

    </div>
  )
}

export default About