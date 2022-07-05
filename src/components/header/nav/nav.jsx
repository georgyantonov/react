import './style.css'
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

  return (
    
    <div  className='navbarmenu'>
        <ul>
        { array.map(({id, name, url}, index)=> {
            return(
                
                <li key={id}>
                    <a href={url} onClick={()=> props.isMobile && props.linkClick() } >
                       { name } 
                    </a>
                </li>
                
            )
        })}
        </ul>
    </div>
  )
}