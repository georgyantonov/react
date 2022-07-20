import React from 'react'
import './style.scss'
import GetStarted from './get_started/get_started'
import VideoLinks from './videolinks/VideoLinks'
import StaySafe from './staysafe/StaySafe'
import ExpertsWrapper from './experts/ExpertsWrapper'
import Healthcare from './healthcare/Healthcare'

export default function Main() {

  return (
    <main>
      <div className='main_screen'>
        <GetStarted></GetStarted>
        <VideoLinks></VideoLinks>  
        <StaySafe></StaySafe>
        <ExpertsWrapper></ExpertsWrapper>
        <Healthcare></Healthcare>
      </div>
    </main>
  )
}
