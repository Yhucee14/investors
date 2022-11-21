import React from 'react'
import './Container.css';

import Carousel from '../Carousel/Carousel'
import Fixtures from '../Fixtures/Fixtures';

const Container = () => {
  return (
    <div className='container'>
        
        
        <Carousel />
        <Fixtures />

    </div>
  )
}

export default Container