
import React from 'react'
import  './Hero.css'
import arrow from '../../assets/arrow.png'

const Hero = () => {
  return (
    <div className='hero container'> 
    <div className='hero-text'>
      <h1>we Ensure better education for a better world</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, tempore nobis repudiandae aspernatur veniam excepturi, officia molestiae natus, fugiat placeat optio ipsam hic corrupti.</p>
      <button className='btn'>Explore More <img src={arrow} alt="" /></button>

    </div>
      
    </div>
  )
}

export default Hero
