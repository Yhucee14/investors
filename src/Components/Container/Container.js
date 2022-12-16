import React from 'react'
import './Container.css';
import Carousel from '../Carousel/Carousel'
import Fixtures from '../Fixtures/Fixtures';
import About from '../About/About';
import Footer from '../Footer/Footer';



const Container = () => {
  return (
    <div className='container'>
        
        <Carousel />
        <Fixtures />
        <About />
        <Footer />
   
    </div>
  )
}

export default Container