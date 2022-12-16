import React from 'react'
import './Squad.css';
import { Box, Card, CardContent, Typography, CardMedia} from "@mui/material";
import card1 from '../Assets/post.jpg';
import Grid from '@mui/material/Grid';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


const Squad = () => {
  return (

    
    
    <div className='squadcon'>
      <Navbar sx={{
    bgcolor: 'blue',

}}/>
      
      <Typography variant='h6' sx={{color:  '#d72a2ada',}}><b >Welcome, Meet our Squad</b></Typography><br></br>
      <Typography variant='h6'>(Our Coaches)</Typography><br></br>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 8, sm: 2, md: 2}} className='gridcon'> 
  <Grid item sm={4} lg={4} md={4}>
  <Box className='cardbox' >
         <Card className='card'>
            <CardMedia className='cardmed'
            component='img'
            height='200'
            image= {card1}
            alt='unsplash'/>
            <CardContent className='cardcon'>
                <Typography>
                  Coach description
                </Typography>
            
            </CardContent>
        </Card>
         </Box>
  </Grid>

  <Grid item sm={4} lg={4} md={4}>
  <Box className='cardbox' >
         <Card className='card'>
            <CardMedia className='cardmed'
            component='img'
            height='200'
            image= {card1}
            alt='unsplash'/>
            <CardContent className='cardcon'>
                <Typography>
                  Assistant Coach description
                </Typography>
            
            </CardContent>
        </Card>
         </Box>
  </Grid>

  <Grid item sm={4} lg={4} md={4}>
  <Box className='cardbox' >
         <Card className='card'>
            <CardMedia className='cardmed'
            component='img'
            height='200'
            image= {card1}
            alt='unsplash'/>
            <CardContent className='cardcon'>
                <Typography>
                  Director description
                </Typography>
            
            </CardContent>
        </Card>
         </Box>
  </Grid>
  </Grid> <br></br>

  <Typography variant='h6'>(Our Players)</Typography><br></br>

  <Grid container rowSpacing={1} columnSpacing={{ xs: 8, sm: 2, md: 2}} className='gridcon'> 
  <Grid item sm={4} lg={4} md={4} >
  <Box className='cardbox' >
         <Card className='card'>
            <CardMedia className='cardmed'
            component='img'
            height='200'
            image= {card1}
            alt='unsplash'/>
            <CardContent className='cardcon'>
                <Typography>
                  Player Description
                </Typography>
            
            </CardContent>
        </Card>
         </Box>
  </Grid>

  <Grid item sm={4} lg={4} md={4}>
  <Box className='cardbox' >
         <Card className='card'>
            <CardMedia className='cardmed'
            component='img'
            height='200'
            image= {card1}
            alt='unsplash'/>
            <CardContent className='cardcon'>
                <Typography>
                  Player description
                </Typography>
            
            </CardContent>
        </Card>
         </Box>
  </Grid>

  <Grid item sm={4} lg={4} md={4}>
  <Box className='cardbox' >
         <Card className='card'>
            <CardMedia className='cardmed'
            component='img'
            height='200'
            image= {card1}
            alt='unsplash'/>
            <CardContent className='cardcon'>
                <Typography>
                Player description
                </Typography>
            
            </CardContent>
        </Card>
         </Box>
  </Grid>

  <Grid item sm={4} lg={4} md={4}>
  <Box className='cardbox' >
         <Card className='card'>
            <CardMedia className='cardmed'
            component='img'
            height='200'
            image= {card1}
            alt='unsplash'/>
            <CardContent className='cardcon'>
                <Typography>
                Player description
                </Typography>
            
            </CardContent>
        </Card>
         </Box>
  </Grid>

  <Grid item sm={4} lg={4} md={4}>
  <Box className='cardbox' >
         <Card className='card'>
            <CardMedia className='cardmed'
            component='img'
            height='200'
            image= {card1}
            alt='unsplash'/>
            <CardContent className='cardcon'>
                <Typography>
                Player description
                </Typography>
            
            </CardContent>
        </Card>
         </Box>
  </Grid>

  <Grid item sm={4} lg={4} md={4}>
  <Box className='cardbox' >
         <Card className='card'>
            <CardMedia className='cardmed'
            component='img'
            height='200'
            image= {card1}
            alt='unsplash'/>
            <CardContent className='cardcon'>
                <Typography>
                Player description
                </Typography>
            
            </CardContent>
        </Card>
         </Box>
  </Grid>
  </Grid>

  <Footer />

    </div>
   
  )
}

export default Squad