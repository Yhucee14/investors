import React from 'react'
import logo from '../Assets/logo.jpg';
import {AppBar, Toolbar, IconButton, Stack, Button, Typography} from '@mui/material';
import './Navbar.css';


const Navbar = () => {
  return (
    <div>
        <AppBar sx={{
    bgcolor: '#071121',
    marginTop: 2,

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
           <Button variant='outlined' id='btnstyle' size='small'>Squad</Button> 
           <Button variant='outlined' id='btnstyle' size='small'>Fixtures</Button>
           <Button variant='outlined' id='btnstyle' size='small'>About</Button>
       </Stack>

       <div>
       <Button variant='outlined' size='small' sx={{
           bgcolor: '#d72a2ada',
           borderRadius: 1,
           textTransform: 'none',
           color: '#fff',
       }}>
           Login
       </Button>
       </div>
     

      
     
   </Toolbar>
 
</AppBar>
    </div>
  )
}

export default Navbar