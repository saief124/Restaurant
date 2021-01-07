import React from 'react'
import CartChild from './CartChild';


export default function cartContainer(props) {

    let prices = props.filteredItems.map(food => parseFloat(food.menu_item.price))
    let total = prices.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    console.log(total)
    let price = props.filteredItems.length;
    let button;
    let cost
    const style = {
        fontFamily: "Russo One",
        fontSize: 35,
        backgroundColor: '#F1F1E2',
        justifyContent: 'center',
        color: "#A370A7"

    }
    

    if (price > 0) {

      button = <button> Checkout</button>
      cost = <p> Total: ${total} </p>

    }

    
    const showTitle = props.filteredItems.length > 0
    return (
        
        <div>
            <h1 style={style} >{showTitle ? 'My Order' : 'No Items Added...' }</h1>
            {
                props.filteredItems.map((order, index) =>
                    <CartChild
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
