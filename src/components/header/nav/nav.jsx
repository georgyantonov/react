import './style.css'
import React from 'react'
import { useState } from 'react'


export default function Nav(props) {
    console.log(props)
    const [array, setArray] = useState([
        { 
            id: 0,
            name: "Home",
            url: "#",
        },
        {
            id: 1,
            name: "Features",
            url: "#",
        },
        {
            id: 2,
            name: "Support",
            url: "#",
        },
        {
            id: 3,
            name: "Contact us",
            url: "#",
        }
    ]) ;

  return (
    
    <div  className='navbarmenu'>
        <ul>
        { array.map(({id, name, url, scr}, index)=> {
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
