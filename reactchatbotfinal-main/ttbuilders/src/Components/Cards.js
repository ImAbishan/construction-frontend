import React from 'react';
import './Cards.css';
import StartPage from './StartPage';

function Cards() {
  return (
    <div className='cards'>
      <h1>HOW TO USE FINANCIAL CALCULATORS</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>


           <StartPage 
             src ='/images/loan.jpg'
             text = "You can calculate Monthly payment and etc... "
           label="Loan"
           path="/services"

           />


<StartPage  
             src ='/images/loan.jpg'
             text = "You can calculate Monthly payment and etc... "
           label="Mortgage"
           path="/services"

           />

<StartPage 
             src ='images/loan.jpg'
             text = "You can calculate Monthly payment and etc... "
           label="compound "
           path="/services"

           />


          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;