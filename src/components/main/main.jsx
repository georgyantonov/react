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
  const numbersArray = [
    {
      id:'1',
      className:'users',
      h1:"2m",
      p:'users',
    },
    {
      id:'2',
      className:'countries',
      h1:'78',
      p:'countries',
    },
    {
      id:'3',
      h1:'10,000+',
      p:'medical experts'
    }
  ]
  const cardsArray = [
    {
      id: '1',
      img: icon,
      h1: 'Symptom checker',
      p:"Check if you are infected by COVID-19 with our Symptom Checker",
    },
    {
      id: '2',
      img: icon2,
      h1: '24x7 Medical support',
      p:"Consult with 10,000+ health workers about your concerns.",
    },
    {
      id: '3',
      img: icon3,
      h1: 'Conditions',
      p:"Bringing premium healthcare features to your fingertips.",
    },
  ]
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
          { numbersArray.map((item)=>{
          return(
            <div className={item.className}>
              <h1>{item.h1}</h1>
              <p>{item.p}</p>
            </div>)
        })}
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
            { cardsArray.map((item)=>{
              return (
              <div className="card">
                <div className="img">
                  <img src={item.img} alt="" />
                </div>
                <h1>{item.h1}</h1>
                <p>{item.p}</p>
              </div>)
              })}
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
