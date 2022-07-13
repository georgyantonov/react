import './style.scss'
import React from 'react'


export default function Button() {
  function openPopUp(e){
    e.stopPropagation()
    console.dir(e)
    let popup = document.querySelector('.download_wrapper')
    e.preventDefault();
    popup.classList.add('active')
  }
  function closePopUp (e){
    e.stopPropagation()
    let popup = document.querySelector('.active')
    popup.classList.remove('active')
  }
  return (
    <div className='button_container'onClick={(e)=>openPopUp(e)}>
        <button className='download' >
            <p>Download</p>
        </button>
        <div className="download_wrapper">
              <div className="download_wrapper_content">
                <div className="close"onClick={(e)=>closePopUp(e)}></div>
                <h1>Download our App</h1>
                <button className='download'>
                  <p>Download</p>
                </button>
              </div>
            </div>
    </div>
  )
}
