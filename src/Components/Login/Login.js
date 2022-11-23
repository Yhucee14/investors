import React from 'react'
import './Login.css';
import {Typography, Card, CardContent,Grid, TextField, Button} from '@mui/material';

const Login = () => {
  return (
    <div className='logincon'>
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
                   <Button variant='contained' sx={{
           bgcolor: '#d72a2ada',
           borderRadius: 1,
           textTransform: 'none',
           color: '#fff',
       }} fullWidth required><b>Login</b></Button>
        </Grid>
                </Grid>
            </CardContent>
        </Card>
    </div>
  )
}

export default Login