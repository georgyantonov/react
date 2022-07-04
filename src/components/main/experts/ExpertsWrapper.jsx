import React from 'react'
import image4 from'./Group 26.png'

export default function ExpertsWrapper() {
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
  return (
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
  )
}
