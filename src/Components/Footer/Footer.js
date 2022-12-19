import React from 'react'
import './Footer.css';
import {AiOutlineYoutube} from "react-icons/ai";
import {CiTwitter} from "react-icons/ci";
import {SlSocialFacebook, SlSocialInstagram} from "react-icons/sl";
import {Button} from '@mui/material';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';

const Footer = () => {
  return (
    <Grid container className='footercov'>
        <Grid className='sicons-cov'>
        <Button className='sicons' id='icon'>
            <AiOutlineYoutube size={33} color = "#fff" />
        </Button>
        
        <Button className='sicons' id='icon'>
            <CiTwitter size={33} color = "#fff"/>
        </Button>

        <Button className='sicons' id='icon'>
            <SlSocialFacebook size={30} color = "#fff"/>
        </Button>

        <Button className='sicons' id='icon'>
            <SlSocialInstagram size={28} color = "#fff"/>
        </Button>
        </Grid>

        <Grid className='foot-btn' >
        <Link to="/Login" id='linkbtn'>
        <Button id='bluebtn' sx={{
           bgcolor: '#22365659',
           borderRadius: 1,
           textTransform: 'none',
           color: '#fff',
           padding: '5px',
       }} >
           Login
       </Button> </Link>

       <Link to="/Login" id='linkbtn'>
       <Button id='redbtn' sx={{
           bgcolor: '#d72a2ada',
           borderRadius: 1,
           textTransform: 'none',
           color: '#fff',
           padding: '5px',
       }} >
            Sign Out
       </Button> </Link>
        </Grid>
       
    </Grid>
  )
}

export default Footer