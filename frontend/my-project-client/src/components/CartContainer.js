import React from 'react'
import Cart from './Cart';
import RMenu from './RMenu';

const cartContainer=(props)=> {

    let prices = props.myorders.map(food => parseFloat(food.price))
    let total = prices.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    console.log(total)
    let price = props.myorders.length;
    let button;
    let cost
    

    if (price > 0) {

      button = <button> Checkout</button>
      cost = <p> Total: ${total} </p>

    }
    return (
        
        <div>
            {
                props.myorders.map((order, index) =>
                    <Cart
                        key={index}
                            myorder={order}
                                removeOrder={props.removeOrder}  
                    />
                )
            }
            <br></br>
             {cost}
             {button}
            
          
        </div>
    )
}

export default cartContainer;