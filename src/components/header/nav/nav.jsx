import './style.scss'
import React from 'react'
import { useState } from 'react'


export default function Nav(props) {
    const [array, setArray] = useState([
        { 
            id: 0,
            name: "Home",
            url: "#video",
        },
        {
            id: 1,
            name: "Features",
            url: "#experts",
        },
        {
            id: 2,
            name: "Support",
            url: "#talk",
        },
        {
            id: 3,
            name: "Contact us",
            url: "#healthcare",
        }
    ]) ;
    window.onload = function(){
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
      );
      }}
  return (
    
    <div  className='navbarmenu'>
        <ul>
        { array.map(({id, name, url}, index)=> {
            return(
                
                <li  key={id}>
                    <a className='nav_item' href={url} onClick={()=>   props.isMobile && props.linkClick() } >
                       { name } 
                    </a>
                </li>
                
            )
        })}
        </ul>
    </div>
  )
}