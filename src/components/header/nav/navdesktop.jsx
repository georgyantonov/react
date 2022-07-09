import Nav from "./nav";
import React from 'react'

const anchors = document.querySelectorAll('.nav_item')
for (const anchor of anchors){
  if (anchor){ console.log('да')}
    const id = anchor.getAttribute('href')
    anchor.addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('' +id).scrollIntoView({
            behavior:'smooth',
            block:'start'
        })
    }
)
}

export default function Navdesktop() {
  return (
    <nav className="navbar">
    <Nav active={true} />
    </nav>
  )
}
