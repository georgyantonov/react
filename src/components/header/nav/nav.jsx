import './style.css'
import React from 'react'
import { useState } from 'react'


export default function Nav(props) {
    console.log(props)
    const [array, setArray] = useState([
        { 
            id: 0,
            name: "Home",
            link: "#"
            
        },
        {
            id: 1,
            name: "Features",
            link: "#"
        },
        {
            id: 2,
            name: "Support",
            link: "#"
        },
        {
            id: 3,
            name: "Contact us",
            link: "#"
        }
    ]) 
  return (
    
    <div  className='navbarmenu'>
        <ul>
        { array.map(({id, name, link}, index)=> {
            return(
                
                <li key={id}>
                    <a href={link} onClick={()=> props.isMobile && props.linkClick()}>
                       { name }
                    </a>
                </li>
                
            )
        })}
        </ul>
    </div>
  )
}
