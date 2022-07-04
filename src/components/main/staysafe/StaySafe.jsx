import React from 'react'
import image3 from './Group 3.png'

export default function StaySafe() {
  return (
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
  )
}
