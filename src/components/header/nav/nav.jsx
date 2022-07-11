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
    function handleClick(e){
        console.log(e)
        const closest = e.target.closest('li > a')
        const closestId = closest.id
        console.dir(closestId)
        const anchor = document.querySelector(`${closestId}`)
        console.log(anchor)
        anchor.scrollIntoView({
            behavior: "smooth",
            block:"start"
        })
    }

  return (
    
    <div  className='navbarmenu'>
        <ul onClick={(e)=>handleClick(e)}>
        { array.map(({id, name, url}, index)=> {
            return(
                
                <li  key={id}>
                    <a className='nav_item' id={url} onClick={()=>   props.isMobile && props.linkClick() } >
                       { name } 
                    </a>
                </li>
                
            )
        })}
        </ul>
    </div>
  )
}