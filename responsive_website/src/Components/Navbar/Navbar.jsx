
import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/EYRN4.jpg'
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ?setSticky(true) : setSticky(false);
    })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false);

  const togglemenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);

  }


  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt="" />
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0}duration={500}>Home</Link></li>


        <li><Link to='program' smooth={true} offset={-280} duration={500}>Program</Link></li>


        <li><Link to='about' smooth={true} offset={-110} duration={500}>about us</Link></li>


        <li><Link to='campus' smooth={true} offset={-280} duration={500}>Campus</Link></li>


        <li><Link to='testimonials' smooth={true} offset={-280} duration={500}>Testimonials</Link></li>


        <li><Link className='btn' ><Link to='contact' smooth={true} offset={-280} duration={500}>Contact Us</Link></Link></li>
      </ul>


      <img src={menu} alt="" className='menu' onClick={togglemenu} />
    </nav>
  )
}

export default Navbar
