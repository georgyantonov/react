import './style.css'
import React from 'react'


export default function Nav(props) {
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
    
    <div  className='navbarmenu'>
        <ul>
        { array.map((item)=> {
            return(
                
                <li >
                    <a href={item.link} onClick={()=> props.isMobile && props.linkClick()}>
                       { item.name }
                    </a>
                </li>
                
            )
        })}
        </ul>
    </div>
  )
}
