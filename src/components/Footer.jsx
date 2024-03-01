import React from 'react'

function Footer() {
  return (
   <div className='footer-container'>
      <div className='footer-item'>
        <img src={'/img/bg.png'} alt="" layout="fill" objectFit="cover"/>
      </div>
      <div className='footer-item'>
        <div className='footer-card'>
          <h2 className='motto'>
            OH YES, WE DID.THE CHEESY WHEEL PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
      </div>
      <div className='footer-card'>
          <h1>FIND OUR RESTAURANTS</h1>
          <p className='footer-text'>
            1654 R. Don Road #304.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </p>
          <p className='footer-text'>
            2356 K. Laquie Rd #235.
            <br /> NewYork, 85022
            <br /> (602) 867-1011
          </p>
          <p className='footer-text'>
            1614 E. Erwin St #104.
            <br /> NewYork, 85022
            <br /> (602) 867-1012
          </p>
      </div>
      <div className='footer-card'>
        <h1 className='footer-title'>WORKING HOURS</h1>
          <p className='footer-text'>
             MONDAY UNTIL FRIDAY
            <br /> 9:00 - 22:00
          </p>
          <p className='footer-text'>
            SATURDAY - SUNDAY
            <br /> 12:00 - 24:00
          </p>
        </div>
      </div>
  )
}

export default Footer