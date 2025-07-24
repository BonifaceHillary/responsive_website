
import React from 'react'
import './Campus.css'

import pic5 from '../../assets/pic5.jpg'

import pic6 from '../../assets/pic6.jpg'

import pic7 from '../../assets/pic7.jpg'

import pic8 from '../../assets/pic8.jpg'

 import arrow from '../../assets/arrow4.webp'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={pic5} alt="" />

        <img src={pic6} alt="" />

        <img src={pic7} alt="" />

        <img src={pic8} alt="" />

      </div>

      {/* <button>see mere here</button> */}

       <button className='btn'>See more here <img src={arrow} alt="" /></button> 
      
    </div>
  )
}

export default Campus
