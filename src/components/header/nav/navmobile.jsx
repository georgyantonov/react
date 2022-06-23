import Nav from "./nav";
import './style.css'
import React from 'react'
import {CgMenuRound} from 'react-icons/cg'
import { useState } from "react";
import { CSSTransition } from "react-transition-group";


export default function Navmobile() {

  const [open, setOpen] = useState(false);
  
  return (
    <nav className='mobile_nav'>
      <CgMenuRound className="burger" onClick = { ()=> setOpen(!open)} 
        /> 
        <CSSTransition
        in={open}
        timeout={0}
        classNames="navbarmenu"
        unmountOnExit
        onEnter={() => setOpen(true)}
        onClick={() => setOpen(false)}
        >
        <Nav  />
        </CSSTransition>
    </nav>
  )
}

