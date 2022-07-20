import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import up from './components/up.svg'

const root = ReactDOM.createRoot(document.getElementById('root'));

function checkScroll(e){
  const up = document.querySelector('.sticky_btn')
  console.log(e);
  if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
    up.style.display='block';
  }
  else{
    up.style.display='none'
  }
}

function scrollTop(e){
  document.body.scrollTo({top:0, behavior:'smooth'});
  document.documentElement.scrollTo({top:0, behavior:'smooth'});
  const up = document.querySelector('.sticky_btn')
  up.style.display='none'
}

root.render(
  <div className='sel' onWheel={(e)=>checkScroll(e)}>
  <App />
  <div className='sticky_btn' onClick={(e)=>scrollTop(e)}>
        <img src={up} alt='Вверх'></img>
      </div>
  </div>
);
