import React from 'react'
import {Typography, IconButton} from "@mui/material";
import "./Fixtures.css";
import logo from '../Assets/logo.jpg';

const Fixtures = () => {
  return (
    <div className='fixcon'>
         <Typography variant='h6' sx={{ color: '#d72a2ada',}} >
            Fixtures
        </Typography><br></br>

    <div className='fixcard'>

        <div className='cardone'><span className='formred'>Last Game:</span> <br></br>
        <IconButton size='small' edge='start' aria-label='logo'>
       <img src={logo} alt="logo" width={25} />  
       </IconButton> <b variant='h6' sx={{color: '#fff', paddingLeft: '2px'}}>Investors FC <b className='formgreen'>7</b></b>
       
        <b variant='h6' sx={{color: '#fff', paddingLeft: '2px'}}>-<b className='formgreen'>0 </b>Destiny Lodge</b>
       <IconButton size='small' edge='end' aria-label='logo'>
       <img src={logo} alt="logo" width={25} /> 
      
       </IconButton> <br></br>
       <Typography className='formred'>Match details here</Typography>

        </div>

        <Typography>Form: <b className='formgreen'>W W</b> <b className='formred'>L L</b> D </Typography>

        <div className='cardtwo'> <span className='formred'>Next Game:</span> <br></br>
        <IconButton size='small' edge='start' aria-label='logo'>
       <img src={logo} alt="logo" width={25} />  
       </IconButton> <b variant='h6' sx={{color: '#fff', paddingLeft: '2px'}}>Investors FC <b className='formgreen'>0</b></b>
       
        <b variant='h6' sx={{color: '#fff', paddingLeft: '2px'}}>-<b className='formgreen'>0 </b>Unknown</b>
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