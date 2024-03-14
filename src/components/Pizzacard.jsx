import React from 'react'

function Pizzacard() {
  return (
    <div className='container-pizza-card'>
        <img src={'/img/pizza.png'} alt="" width="400" height="400"/>
        <h1 className='pizza-title'>Pizzazz Pie</h1>
        <span className='pizza-price'>$20</span>
        <p className='pizza-desc'>
            "Slice into happiness with every bite!"
        </p>
    </div>

  )
}

export default Pizzacard