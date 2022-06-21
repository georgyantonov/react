import Nav from "./nav";
import './style.css'
import React from 'react'
import {CgMenuRound} from 'react-icons/cg'
export default function Navmobile() {
  return (
    <nav className='mobile_nav'>
      <CgMenuRound className="burger">
        <Nav />
      </CgMenuRound>
    
    </nav>
  )
}

