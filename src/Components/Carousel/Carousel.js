import { useState, useEffect } from "react";
// import Carousel from 'react-material-ui-carousel';
// import item from '../Item';
import {slider} from '../passe';
import "./Carousel.css";
import Navbar from '../Navbar/Navbar';
// import {Button} from '@mui/material';

// function Example() {


//   return (
//     // <Carousel>
//     //   {
//     //     slider.map(Item => <Item key={item.id} item={item} />)
//     //   }
//     // </Carousel>
//   )
// }

const Example = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = slider.length;
  /* slideLength = 1 2 3 */
  /* currentSlide = 0 1 2 */

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 4000;

  const nextSlide = () => {
      setCurrentSlide(currentSlide === slideLength -1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? slideLength -1 : currentSlide - 1);
  };

  function auto() {
      slideInterval = setInterval(nextSlide, intervalTime)
  }

  useEffect(() => {
      setCurrentSlide(0)
  }, []);

  useEffect(() => {
      if (autoScroll){
          auto();
      }
      return () => clearInterval(slideInterval)
  }, [currentSlide]);

return (
  <main className="slider">
    <Navbar />

      {slider.map((slide, index) => {
          return (
              <section className={index === currentSlide ? "slide current" : "slide"} key={index}>
                  {index === currentSlide && (
                      <>
                      <img src={slide.image} alt="slide" id='slideimg'/>
                      <div className="content">
                          
                          <p><b>{slide.heading}</b> 
                          </p> <br/>
                          <p id='slidedesc'>{slide.desc} </p>
                          
                          
                         
                      </div>
                      </>
              )}

              </section>
          )
      })}
      
  </main>
)
}

export default Example
