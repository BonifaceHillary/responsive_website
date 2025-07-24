
import React from 'react'
import './About.css'
import pic4 from '../../assets/pic4.jpg'
 import play  from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
     <div className='about'>
      <div className='about-left'>
        <img src={pic4} alt="" className='about-img' />
        <img src={play} alt="" className='play-icon' onClick={() => {setPlayState(true)}} />
       </div>

      <div className='about-right'>
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing tomorrow's leaders today!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates impedit voluptatum ea eius, nemo beatae, exercitationem voluptas iste esse obcaecati sed cumque aut nam quaerat tempore corporis excepturi sequi aperiam?</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe excepturi facilis ut at eos minus vitae libero alias error suscipit!</p>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, rerum ipsa accusamus incidunt perferendis maiores. Labore magni iusto eum, perferendis doloremque delectus necessitatibus eaque minus!</p>

      </div>
      
    </div>
  )
}

export default About
