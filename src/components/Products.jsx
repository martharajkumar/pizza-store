import React from 'react'
import Pizzacard from './Pizzacard'

function Products() {
  return (
    <div className='product-container'>
        <h1 className='product-title'>
            THE BEST PIZZA IN TOWN
        </h1>
        <p className='product-desc'>
          "Indulge in a symphony of flavors with our irresistible pizzas, where every bite transports you to a world of culinary delight. 
          Crafted with passion and precision, our pizzas promise a tantalizing fusion of fresh ingredients, gooey cheese, and savory sauces, 
           all perfectly baked to crispy perfection. Whether you crave the classic charm of a Margherita or the bold adventure of a BBQ Chicken, our pizzas are more than just a meal; they're a delicious journey for your taste buds. 
          Bite into happiness with every slice and savor the magic of pizza perfection, only at Pizza Store"
        </p>
        <div className='pizza-featured'>
            <Pizzacard/>
            <Pizzacard/>
            <Pizzacard/>
            <Pizzacard/>
            <Pizzacard/>
            <Pizzacard/>
        </div>
    </div>
  )
}

export default Products