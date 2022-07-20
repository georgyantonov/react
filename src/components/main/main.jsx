import React from 'react'
import './style.scss'
import GetStarted from './get_started/get_started'
import VideoLinks from './videolinks/VideoLinks'
import StaySafe from './staysafe/StaySafe'
import ExpertsWrapper from './experts/ExpertsWrapper'
import Healthcare from './healthcare/Healthcare'
import up from './up.svg'

export default function Main() {
  
  function checkScroll(e){
    const up = document.querySelector('.sticky_btn')
    console.log(e);
    if(document.body.scrollTop > 114 || document.documentElement.scrollTop > 114){
      up.style.display='block'
    }
    else{
      up.style.display='none'
    }
  }
  return (
    <main>
      <div className='main_screen' onWheel={(e)=>checkScroll(e)}>
        <GetStarted></GetStarted>
        <VideoLinks></VideoLinks>  
        <StaySafe></StaySafe>
        <ExpertsWrapper></ExpertsWrapper>
        <Healthcare></Healthcare>
        <div className='sticky_btn'>
        <img src={up} alt='Вверх'></img>
      </div>
      </div>
    </main>
  )
}
