import React from 'react'
import "./nav.css"

import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <>
    <header>


    <div className="nav-bar-wrap">
        
        <div className='logo'>
            <h1>Birthday bash</h1>
        </div>
        <div className='content'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/pages">Pages</Link></li>
            <li><Link to="/contact">contact</Link></li>
        </ul>

        </div>
       

    </div>
    </header>
      
    </>
  )
}
