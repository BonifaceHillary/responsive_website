
import React from 'react'
import './Programs.css'
import pic1 from '../../assets/pic1.jpg'
import pic2 from '../../assets/pic2.jpg'

import pic3 from '../../assets/pic3.jpg'

import pic4 from '../../assets/graduation1.png'

import pic5 from '../../assets/graduation2.png'

import pic6 from '../../assets/graduation3.png'


const Programs = () => {
  return (
    <div className='programs'>
      <div className='program'>
        <img src={pic1} alt="" />
        <div className="caption">
          <img src={pic4} alt="" />
          <p>Graduation Degree</p>

        </div>
      
      </div>

      <div className='program'>
        <img src={pic2} alt="" />
        <div className="caption">
          <img src={pic5} alt="" />
          <p>master Degree</p>

      </div>
      </div>

      <div className='program'>
        <img src={pic3} alt="" />
        <div className="caption">
          <img src={pic6} alt="" /><p>Graduation</p>

      </div>
      </div>
    </div>
  )
}

export default Programs
