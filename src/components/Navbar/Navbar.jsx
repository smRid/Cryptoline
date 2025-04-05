import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo-container">
        <img src={logo} alt="logo" />
        <span className="logo-text">Cryptoline</span>
      </div>
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select>
            <option value="USD"></option>
            <option value="EUR"></option>
        </select>
        <button>Sign Up <img src={arrow_icon} alt="arrow_icon" /></button>
      </div>
    </div>
  )
}

export default Navbar
