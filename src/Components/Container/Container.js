import React from 'react'
import './Container.css';
import Carousel from '../Carousel/Carousel'
import Fixtures from '../Fixtures/Fixtures';
import Squad from '../Squad/Squad';
import About from '../About/About';
import Signup from '../Signup/Signup';

const Container = () => {
  return (
    <div className='container'>
        
        
        <Carousel />
        <Fixtures />
        <Squad />
        <About />
        <Signup />

    </div>
  )
}

export default Container