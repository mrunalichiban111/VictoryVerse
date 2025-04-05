import React from 'react'
import './Navbar.css'
import logo1 from '../assets/logo1.png'


const Navbar = () => {
  return (
    <nav className='container'>
    <img src={logo1} alt="" className='logo'/>
      <ul>
        <li>Home</li>
        <li><button className='btn'>Create Events</button></li>
        <li>Winners</li>
        <li>AboutUs</li>
        
        <li><button className='btn'>Contact Us</button></li>

      </ul>
    </nav>
  )
}


export default Navbar
