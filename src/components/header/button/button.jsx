import './style.scss'
import React from 'react'


export default function Button() {
  
  return (
    <div className='button_container'>
        <button className='download'>
            <p>Download</p>
        </button>
        <div className="download_wrapper">
          <div className="close"></div>
          <div className="download_wrapper_content">
            <h1>Download our App</h1>
            <button className='download'>
              <p>Download</p>
            </button>
          </div>
        </div>
    </div>
  )
}
