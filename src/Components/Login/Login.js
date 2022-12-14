import React from 'react'
import './Login.css';
import {Typography, Card, CardContent,Grid, TextField, Button} from '@mui/material';
import Navbar from '../Navbar/Navbar';
import child from '../Assets/child.jpeg'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='logincon'>
        <Navbar />
         
         <div>
         <img src={child} alt="logo" className='loginimg'/>
         </div>
       

       <Typography variant='h6' align='center'>Welcome, Please Login to continue</Typography> <br></br>

       <Card className='cardcov'>
            <CardContent className='cardcon'>
                <Grid container spacing={1} >
                    <Grid xs={12} sm={12} lg={12} item className='cardcontent'>
                        <TextField size='small' label="Email" placeholder='Enter your Email' variant='outlined' fullWidth required className='textcon'/>
                    </Grid>
                    <Grid xs={12} sm={12} lg={12} item className='cardcontent'>
                        <TextField size='small' label="Password" placeholder='Enter Password' variant='outlined' fullWidth required className='textcon'/>
                    </Grid>
                    <Grid xs={12} item> 

                    <Typography size='small' align='center' sx={{fontSize: "14px",}} >Forgotten Password?, <Link className='forgot'> Click here </Link></Typography><br></br>

                    <Link to='/container' id='linkbtn'>
                   <Button variant='contained' sx={{
           bgcolor: '#d72a2ada',
           borderRadius: 1,
           textTransform: 'none',
           color: '#fff',
       }} fullWidth required><b>Login</b></Button> </Link>
        </Grid>
                </Grid>
            </CardContent>
        </Card>
    </div>
  )
}

export default Login