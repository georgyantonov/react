import React from 'react'
import icon from './Vector.svg'
import icon2 from './Vector2.svg'
import icon3 from './Vector3.svg'

export default function Healthcare() {

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
    <div className="healthcare_wrapper">
            <div className="description">
              <h1><span className="orange">Healthcare</span> at your Fingertips.</h1>
              <h2>Bringing premium healthcare features to your fingertips. User friendly mobile platform to <br/> bring healthcare to your fingertips. Signup and be a part of the new health culture.</h2>
            </div>
            <div className="card_container">
            { cardsArray.map(({id, img, h1, p}, index)=>{
              return (
              <div className="card">
                <div className="img">
                  <img src={img} alt="" />
                </div>
                <h1>{h1}</h1>
                <p>{p}</p>
              </div>)
              })}
              <div className="rectangle_23 rec_healthcare first_rec"></div>
              <div className="rectangle_24 rec_healthcare second_rec"></div>
              <div className="rectangle_22 rec_healthcare third_rec"></div>
              <div className="rectangle_23 rec_healthcare fourth_rec"></div>
            </div>
          </div>
  )
}
