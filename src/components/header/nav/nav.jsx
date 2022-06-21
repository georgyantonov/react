import './style.css'
import React from 'react'

export default function Nav() {
    const array = [
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
    ]
  return (
    <div  className='navbar'>
        { array.map((item)=> {
            return(
                <ul>
                <li>
                    <a href={item.link}>
                       { item.name }
                    </a>
                </li>
                </ul>
            )
        })}
    </div>
  )
}
