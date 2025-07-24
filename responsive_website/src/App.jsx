// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App



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
