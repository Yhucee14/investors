import React, {useState} from 'react'
import logo from '../Assets/logo.jpg';
import {AppBar, Toolbar, IconButton, Button, Typography} from '@mui/material';
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
        <Link to="/Container" id='linkbtn'>
       <IconButton size='small' edge='start' aria-label='logo'>
       <img src={logo} alt="logo" width={45} /> 

       <Typography variant='h6' sx={{color: '#fff', paddingLeft: '2px'}}>Investors <span size='small' id='fc'>FC</span></Typography>
       </IconButton> </Link>
       
       
        <div className="nav-links" id={showMenu ? "nav-link-mobile" : "nav-link-mobile-hide"} >
            
        <Link to="/Container" id='linkbtn'><Button variant='outlined' id='btnstyle' size='small' >Home</Button></Link>

        <Link to="/Squad" id='linkbtn'><Button variant='outlined' id='btnstyle' size='small'> Squad </Button></Link> 

        <Link to="/Fixtures" id='linkbtn'><Button variant='outlined' id='btnstyle' size='small'>  Fixtures</Button> </Link>

        <Link to="/About" id='linkbtn'> <Button variant='outlined' id='btnstyle' size='small'> About Us</Button></Link>
        </div>
       

       <main className="navy-links"  id={showMenu ? "nav-link-mobile" : "nav-link-mobile-hide"}>
        
        <Link to="/Login" id='linkbtn'>
       <Button variant='outlined' className="navy-links"  size='small' sx={{
           bgcolor: '#d72a2ada',
           borderRadius: 1,
           textTransform: 'none',
           color: '#fff',
       }} id='logbtn'>
           Logout
       </Button></Link>
       
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