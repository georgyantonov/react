import React from 'react'
import logo1 from './AS.svg'
import logo2 from './GP.svg'
import './style.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className='footer_wrapper'>
        <a href='https://play.google.com/web/store?hl=ru&gl=US'>
            <img src={logo2}></img>
        </a>
        <a href='https://apps.apple.com/ru/'>
            <img src={logo1}></img>
        </a>
      </div>   
    </footer>
  )
}
