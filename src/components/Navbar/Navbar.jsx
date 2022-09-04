import React from 'react'
import '../Navbar/navbar.css'
import logo from '../../photos/logo.png'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
            <div className="logo">
                <img src={logo} alt="ERROR" />
            </div>
            <div className="menu">
            <NavLink className="nav" to="/Home">Home</NavLink>
            <NavLink className="nav" to="/Service">Service</NavLink>
            <NavLink className="nav" to="/About">About</NavLink>
            <NavLink className="nav" to="/Portfolio">Portfolio</NavLink>
            <NavLink className="nav" to="/Team">Team</NavLink>
            <NavLink className="nav" to="/Testimonial">Testimonial</NavLink>
            <NavLink className="nav" to="/Blog">Blog</NavLink>
            <NavLink className="nav" to="/Contact">Contact Us</NavLink>
            <div className="btn">BUY NOW</div>
            </div>
        </div>
  )
}
