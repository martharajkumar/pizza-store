import React from 'react'

function Navbar() {

    const HomeItems=['Home','Products','Menu','Events','Blog','Contact']


  return (
    <div className='nav-bar-container'>
        <div className='nav-bar-item'>
            <div className='callButton'>
                <img src={'/img/telephone.png'} alt="" width='32' height='32'/>
            </div>
            <div className='text'>
                <div className='text'>Call Now</div>
                <div className='text'>0 123 456</div>   
            </div> 
        </div>
        {HomeItems.map((item, index) => (
        <div className='text' key={index}>{item}</div>
    ))}
    <div className='nav-bar-item'>
            <div className='cartButton'>
                <img src={'/img/cart.png'} alt="" width='32' height='32'/>
                <div className='counter'>2</div>
            </div> 
        </div>
    </div>
  )
}

export default Navbar