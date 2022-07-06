import Nav from "./nav";
import './style.css'
import React from 'react'
import {CgMenuRound} from 'react-icons/cg'
import {CgCloseO} from 'react-icons/cg'
import { useState } from "react";
import { CSSTransition } from "react-transition-group";


export default function Navmobile() {

  const [open, setOpen] = useState(false);
  const hamburgerIcon = <CgMenuRound className="burger" onClick = { ()=> setOpen(!open)}/>;
  const closeIcon = <CgCloseO  className="burger" onClick = { ()=> setOpen(!open)}/>;
  const linkClick = () => setOpen(false);
  return (
    <nav className='mobile_nav'>
        {open ? closeIcon : hamburgerIcon}
        <CSSTransition
          in={open}
          timeout={0}
          classNames="navbarmenu"
          unmountOnExit
          onEnter={() => setOpen(true)}
          onClick={() => setOpen(false)}
        >
          <Nav  
            isMobile={true} 
            linkClick={linkClick}
          />
        </CSSTransition>
    </nav>
  )
}

