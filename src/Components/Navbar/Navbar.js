import React, {useState} from 'react'
import logo from '../Assets/logo.jpg';
import {AppBar, Toolbar, IconButton, Stack, Button, Typography} from '@mui/material';
import './Navbar.css';
import { Link } from 'react-router-dom';
import {AiOutlineBars} from "react-icons/ai";
import {RiCloseLine} from "react-icons/ri";
import {AiOutlineYoutube} from "react-icons/ai";
import {CiTwitter} from "react-icons/ci";
import {SlSocialFacebook, SlSocialInstagram} from "react-icons/sl";


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

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
       
       
        <div className="nav-links" id={showMenu ? "nav-link-mobile" : "nav-link-mobile-hide"} >
            
                          <Button variant='outlined' id='btnstyle' size='small' ><Link to="/Container">Home</Link></Button>

                          <Button variant='outlined' id='btnstyle' size='small'> <Link to="/Squad"> Squad </Link> </Button>

                          <Button variant='outlined' id='btnstyle' size='small'> <Link to="/Fixtures"> Fixtures </Link></Button>

                          <Button variant='outlined' id='btnstyle' size='small'> <Link to="/About"> About Us</Link></Button>
        </div>
       

       <main className="navy-links"  id={showMenu ? "nav-link-mobile" : "nav-link-mobile-hide"}>
       <Button variant='outlined' className="navy-links"  size='small' sx={{
           bgcolor: '#d72a2ada',
           borderRadius: 1,
           textTransform: 'none',
           color: '#fff',
       }}>
           <Link to="/Login" id='logbtn'>Logout</Link>
       </Button>
       </main>
     
       <div className='menu-icons' onClick={toggleMenu}>
        {
          showMenu ? (
            <RiCloseLine color='red' size={30} className='ham'/> ) : (<AiOutlineBars  color='red' size={27} className='ham'/>
        )}
    </div>

    <div className='social'  id={showMenu ? "nav-link-mobile" : "nav-link-mobile-hide"}>
        <Button className='social-icons' id='media'>
            <AiOutlineYoutube size={33} color = "#fff" />
        </Button>
        
        <Button className='social-icons' id='media'>
            <CiTwitter size={33} color = "#fff"/>
        </Button>

        <Button className='social-icons' id='media'>
            <SlSocialFacebook size={30} color = "#fff"/>
        </Button>

        <Button className='social-icons' id='media'>
            <SlSocialInstagram size={28} color = "#fff"/>
        </Button>
        </div>
     
   </Toolbar>
  
 
</AppBar>



  
    </div>
  )
}

export default Navbar