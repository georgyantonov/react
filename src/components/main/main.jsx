import React from 'react'
import image1 from "./Group 14.png"
import image2 from "./Group 25.png"
import image3 from './Group 3.png'
import './style.css'

export default function Main() {
  return (
    <main>
      <div className='main_screen'>
        <div className='get_started'>
          <div className='start'>
            <h1>Take care of yours family's <span className='blue'>health.</span></h1>
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
        <div className='video_links'>
          <a href="https://www.youtube.com/">
            <img src={image2} alt="YouTube" />
          </a>
        </div>
        <div className='stay_safe'>
          <div className='mobile_wrapper'>
            <div className='rectangle_19'></div>
            <div className='rectangle_20 small'></div>
            <div className='rectangle_21 small'></div>
            <img src={image3} alt='App'/>
          </div>
          <div className='features'>
            <h1>Stay safe with Go<span className='orange'>Corona.</span></h1>
            <h2>24x7 Support and user friendly mobile platform to bring healthcare to your fingertips. Signup and be a part of <br/>the new health culture.</h2>
            <button>
              <p>Features</p>
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
