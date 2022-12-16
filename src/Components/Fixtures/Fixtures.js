import React from 'react'
import {Typography, IconButton} from "@mui/material";
import "./Fixtures.css";
import logo from '../Assets/logo.jpg';
import child from '../Assets/child.jpeg'
import Navbar from '../Navbar/Navbar';

const Fixtures = () => {
  return (
    <div className='fixcon'>
      <Navbar /> <br></br><br></br>
       <div >
          <img src={child} alt="logo" className='imgcon'/>
      </div>
         <Typography variant='h6' sx={{ color: '#d72a2ada'}} >
            Fixtures
        </Typography><br></br>

    <div className='fixcard'>

        <div className='cardone'><span className='formred'>Last Game:</span> <br></br>
        <IconButton size='small' edge='start' aria-label='logo'>
       <img src={logo} alt="logo" width={25} />  
       </IconButton>Investors FC <b className='formgreen'>7<b/></b>
       
        -0  Destiny Lodge
       <IconButton size='small' edge='end' aria-label='logo'>
       <img src={logo} alt="logo" width={25} /> 
      
       </IconButton> <br></br>
       <Typography className='formred'>Match details here</Typography>

        </div>

        <Typography className='formcon'>Form: <b className='formgreen'>W W</b> <b className='formred'>L L</b> D </Typography>

        <div className='cardtwo'> <span className='formred'>Next Game:</span> <br></br>
        <IconButton size='small' edge='start' aria-label='logo'>
       <img src={logo} alt="logo" width={25} />  
       </IconButton> Investors FC 0
       
        -0 Unknown
       <IconButton size='small' edge='end' aria-label='logo'>
       <img src={logo} alt="logo" width={25} /> 
      
       </IconButton>
       <br></br>
       <Typography>Next opponents Unknown</Typography>
        </div>

    </div>

  

    </div>
  )
}

export default Fixtures