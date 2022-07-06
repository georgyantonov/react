import React from 'react'
import logo1 from './AS.png'
import logo2 from './GP.png'
import './style.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <div className='footer_wrapper'>
        <div className="gp">
        <a href='https://play.google.com/web/store?hl=ru&gl=US'>
            <img  src={logo2}></img>
        </a>
        </div>
        <div className="as">
        <a href='https://apps.apple.com/ru/'>
            <img src={logo1}></img>  
        </a>
        </div>
      </div>   
    </footer>
  )
}
