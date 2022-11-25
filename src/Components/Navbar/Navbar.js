import React from 'react'
import logo from '../Assets/logo.jpg';
import {AppBar, Toolbar, IconButton, Stack, Button, Typography} from '@mui/material';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
        <AppBar sx={{
    bgcolor: '#071121d8',
    zindex: '600',
}}>
   <Toolbar sx={{
   display: 'flex',
   justifyContent: 'space-between',
}}>
       <IconButton size='small' edge='start' aria-label='logo'>
       <img src={logo} alt="logo" width={45} /> 
       <Typography variant='h6' sx={{color: '#fff', paddingLeft: '2px'}}>Investors <span size='small' id='fc'>FC</span></Typography>
       </IconButton>
       


       <Stack direction='row' spacing='2' >
           <Button variant='outlined' id='btnstyle' size='small'>Home</Button>
           <Button variant='outlined' id='btnstyle' size='small'> <Link to="/Squad"> Squad </Link> </Button> 
           <Button variant='outlined' id='btnstyle' size='small'> <Link to="/Fixtures"> Fixtures </Link></Button>
           <Button variant='outlined' id='btnstyle' size='small'> <Link to="/About"> About Us</Link></Button>
       </Stack>

       <main>
       <Button variant='outlined'  size='small' sx={{
           bgcolor: '#d72a2ada',
           borderRadius: 1,
           textTransform: 'none',
           color: '#fff',
       }}>
           <Link to="/Login" id='logbtn'>Login</Link>
       </Button>
       </main>
     

     
   </Toolbar>
 
</AppBar>
    </div>
  )
}

export default Navbar