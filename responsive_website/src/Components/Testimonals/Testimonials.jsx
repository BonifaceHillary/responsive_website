
import React, { useRef } from 'react'

import './Testimonials.css'

import next from '../../assets/next.png'

import back from '../../assets/back.png'

 import pic6 from '../../assets/pic9.jpg'
 import pic7 from '../../assets/pic10.jpg'
 import pic8 from '../../assets/pic11.jpg'
 import pic9 from '../../assets/pic12.jpg'



const Testimonials = () => {

  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50){
      tx -=25;
    }

    slider.current.style.transform = `translatex(${tx}%)`;

  }

  const slideBackward = () => {

    if(tx < -0){
      tx +=25;
    }

    slider.current.style.transform = `translatex(${tx}%)`;


  }



  return (
    <div className='testimonials'>
      <img src={next} alt="" className='next-btn' onClick={slideForward} />

      <img src={back} alt="" className='back-btn' onClick={slideBackward} />

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={pic6} alt="" />
                <div>
                  <h3>William Jackson1</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugiat, aliquid sequi nam maiores nostrum itaque in pariatur soluta quod </p>
            </div>
          </li>

           <li>
            <div className="slide">
              <div className="user-info">
                <img src={pic7} alt="" />
                <div>
                  <h3>William Jackson2</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugiat, aliquid sequi nam maiores nostrum itaque in pariatur soluta quod praesentium cumque omnis ipsa perspiciatis</p>
            </div>
          </li>

           <li>
            <div className="slide">
              <div className="user-info">
                <img src={pic8} alt="" />
                <div>
                  <h3>William Jackson3</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugiat, aliquid sequi nam maiores nostrum itaque in pariatur soluta quod praesentium</p>
            </div>
          </li>

           <li>
            <div className="slide">
              <div className="user-info">
                <img src={pic9} alt="" />
                <div>
                  <h3>William Jackson4</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugiat, aliquid sequi nam maiores nostrum itaque in pariatur soluta quod praesentium cumque omnis ipsa perspiciatis</p>
            </div>
          </li>
        </ul>
      </div>
      
    </div>
  )
}

export default Testimonials
