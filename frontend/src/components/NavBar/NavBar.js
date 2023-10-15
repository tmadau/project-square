import React from 'react'
import logo from './logo.svg';
import './navbar.scss';


const NavBar = () => {
  return (
    <nav>
      <ul>
        <a href=''><img src={logo} alt="logo" /></a>
        <li>
          <a href=''>Services</a>
        </li>
        <li>
          <a href=''>Industries</a>
        </li>
        <li>
          <a href=''>Cases</a>
        </li>
        <li>
          <a href=''>Contact</a>
        </li>
        <button>Let's Talk</button>
      </ul>
    </nav>
  )
}

export default NavBar