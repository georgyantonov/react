import React from 'react'
import image1 from "./Group 14.png"
import image2 from "./Group 25.png"
import image3 from './Group 3.png'
import './style.css'
import image4 from'./Group 26.png'
import icon from './Vector.svg'
import icon2 from './Vector2.svg'
import icon3 from './Vector3.svg'

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
        <div className="experts_wrapper">
          <div className="numbers_wrapper">
          <div className="numbers">
            <div className="users">
              <h1>2m</h1>
              <p>users</p>
            </div>
            <div className="countries">
              <h1>78</h1>
              <p>countries</p>
            </div>
            <div className="experts">
              <h1>10,000+</h1>
              <p>medical experts</p>
            </div>
          </div>
          </div>
          <div className="rectangle_23"></div>
          <div className="rectangle_24"></div>
          <div className="rectangle_22"></div>
          <div className="talk">
            <div className="talk_features">
              <h1>Talk to <span className="blue">experts.</span></h1>
              <h2>Book appointments or submit queries into thousands of<br/> forums concerning health issues and prevention<br/> against noval Corona Virus.</h2>
              <button>
                <p>Features</p>
              </button>
            </div>
            <div className="talk_img">
              <img src={image4} alt="Experts" />
            </div>
          </div>
        </div>
        <div className="healthcare_wrapper">
            <div className="description">
              <h1><span className="orange">Healthcare</span> at your Fingertips.</h1>
              <h2>Bringing premium healthcare features to your fingertips. User friendly mobile platform to <br/> bring healthcare to your fingertips. Signup and be a part of the new health culture.</h2>
            </div>
            <div className="card_container">
              <div className="card">
                <div className="img">
                  <img src={icon} alt="" />
                </div>
                <h1>Symptom checker</h1>
                <p>Check if you are infected by COVID-19 with our Symptom Checker</p>
              </div>
              <div className="card">
                <div className="img">
                <img src={icon2} alt="" />
                </div>
                <h1>24x7 Medical support</h1>
                <p>Consult with 10,000+ health workers about your concerns.</p>
              </div>
              <div className="card">
                <div className="img">
                <img src={icon3} alt="" />
                </div>
                <h1>Conditions</h1>
                <p>Bringing premium healthcare features to your fingertips.</p>
              </div>
              <div className="rectangle_23 rec_healthcare first_rec"></div>
              <div className="rectangle_24 rec_healthcare second_rec"></div>
              <div className="rectangle_22 rec_healthcare third_rec"></div>
              <div className="rectangle_23 rec_healthcare fourth_rec"></div>
            </div>
          </div>
      </div>
    </main>
  )
}
