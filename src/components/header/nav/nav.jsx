import './style.css'
import React from 'react'

export default function Nav() {
    const array = [
        { 
            id: 0,
            name: "Home",
        },
        {
            id: 1,
            name: "Features"
        },
        {
            id: 2,
            name: "Support"
        },
        {
            id: 3,
            name: "Contact us"
        }
    ]
  return (
    <ul className='navbar'>
        { array.map((item)=> {
            return(
                <li>
                    <a href='#'>
                        { item.name }
                    </a>
                </li>
            )
        })}
    </ul>
  )
}
