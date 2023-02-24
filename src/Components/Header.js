import React from 'react'
import './Stylesheets/Header.css'
import logo from '../Images/logo.png'
const Header = () => {
  return (
    <div className='headerPage'>
        <button  className='headerTextRight'>
        Logout
        </button>
        <div className='headerTitle'><span><img src={logo} alt="logo" width={35} height={35} /></span> Sammati - Consent Management System</div>
    </div>
  )
}

export default Header