import './style.css'
import React from 'react'
import logo from './logo.svg'

export default function Logo() {
  return (
    <div className='logo'>
      <a className='logo_svg' href='http://localhost:3000/'>
        <img src={logo} alt='Logo'></img>
      </a>
    </div>
  );
}
