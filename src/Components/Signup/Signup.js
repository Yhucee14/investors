import React from 'react'
import './Signup.css';
import {Typography, Card, CardContent,Grid, TextField, Button} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

const genders = [
    {
      value: 'Male',
      label: 'Male',
    },
    {
        value: 'Female',
        label: 'Female',
    },
  ];

 export default function Signup() {
    const [gender, setgender] = React.useState('Male');
  
    const handleChange = (event) => {
      setgender(event.target.value);
    };

  return (
    <div className='signupcon'>
        <Typography variant='h6' align='center'>Welcome, Please Signup to continue</Typography> <br></br>

        <Card className='cardcov'>
            <CardContent className='cardcon'>
                <Grid container spacing={1} >
                    <Grid xs={12} sm={6} lg={12} item className='cardcontent'>
                        <TextField size='small' label="First Name" placeholder='Enter first name' variant='outlined' fullWidth required className='textcon'/>
                    </Grid>
                    <Grid xs={12} sm={6} lg={12} item className='cardcontent'>
                        <TextField size='small' label="Last Name" placeholder='Enter Last name' variant='outlined' fullWidth required className='textcon'/>
                    </Grid>
                    <Grid xs={12} sm={6} lg={12} item className='cardcontent'>
                        <TextField size='small' label="Email" placeholder='Enter Email' variant='outlined' fullWidth required className='textcon'/>
                    </Grid> 
                    <Grid xs={12} sm={6} lg={12} item className='cardcontent'>
                        <TextField size='small' label="Phone Number" placeholder='Enter Phone Number' variant='outlined' fullWidth required className='textcon'/>
                    </Grid>

                    <Grid xs={12} sm={6} lg={12} item className='cardcontent'>
                        <TextField size='small' id="outlined-select-gender"
          select
          value={gender}
          onChange={handleChange}
         variant='outlined' fullWidth required className='textcon'>

{genders.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </TextField>
          
                    </Grid>

                    <Grid xs={12} sm={6} lg={12} item className='cardcontent'>
                        <TextField size='small' label="Password" placeholder='Create a strong password' variant='outlined' fullWidth required className='textcon'/>
                    </Grid>

                    <Grid xs={12} sm={12} lg={12} item>
                      <Typography id='already'>Already registered?, Click here to Login</Typography>

                    </Grid>

                    


                   <Grid xs={12} item> 
                   <Button variant='contained' sx={{
           bgcolor: '#d72a2ada',
           borderRadius: 1,
           textTransform: 'none',
           color: '#fff',
       }} fullWidth required><b>SIGNUP</b></Button>
        </Grid>

                </Grid>
            </CardContent>
        </Card>
    </div>
  );
}
