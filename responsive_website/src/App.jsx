

import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonals/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {


  const [playState, setPlayState] = useState(false);



  return (
    <div>
      <Navbar />

      <Hero />

      <div className='container'>
        <Title subTitle='Our PROGRAM' title='What We Offer' />

      <Programs />

      <About setPlayState={setPlayState} />

      <Title subTitle='Gallery' title='Campus photos' />

      <Campus />

      <Title subTitle='TESTIMONILS' title='What a student says' />

      <Testimonials />

       <Title subTitle='Contact Us ' title='Get in Touch' />

       <Contact />

       <Footer />
      </div>

      <VideoPlayer playState={playState} setPlayState={setPlayState} />
      
    </div>
  )
}

export default App
