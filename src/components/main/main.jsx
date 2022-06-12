import React from 'react'
import image1 from "./Group 14.png"
import './style.css'

export default function Main() {
  return (
    <main>
      <div className='first_screen'>
          <div className='start'>
            <h1>Take care of yours family's <span>health.</span></h1>
            <h2>All in one destination for COVID-19 health queries.
              <br></br>Consult 10,000+ health workers about your concerns.</h2>
            <button>
              <p>Get started</p>
            </button>
          </div>
          <div className='start_img'>
            <img src={image1} alt="Doctor" />
          </div>
      </div>
    </main>
  )
}
