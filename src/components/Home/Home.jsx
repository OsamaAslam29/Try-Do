import React from 'react'
import '../Home/home.css'
import { NavLink } from 'react-router-dom'
import Hameburger from '../Hameburger/Hameburger'
import Navbar from '../Navbar/Navbar'
export default function Home() {
  return (
    <>
    <header>
        
        <div className="text">
            <h1 className='creative'>CREATIVE</h1>
           <p className='creative_para'>There are many variations of passages of Lorem Ipsum available <br />
           but the majority have suffered alteration.</p>
           <div className="creative_btn">CONTACT US</div>
        </div>
    </header>
    </>
  )
}
