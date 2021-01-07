import React from 'react'
import CartChild from './CartChild';



export default function cartContainer(props) {

    let prices = props.filteredItems.map(food => parseFloat(food.menu_item.price))
    let totalBeforeTaxes = prices.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    
    let price = props.filteredItems.length
    let button
    let subtotal
    let taxes = totalBeforeTaxes * .082
    let totalAfterTaxes = totalBeforeTaxes + taxes
    let tax
    let total
    

    if (price > 0) {

         button = <button onClick={() =>  window.location.href='checkout'}>Checkout</button>
         subtotal = <p> Subtotal: ${totalBeforeTaxes} </p>
         tax = <p>Taxes: ${taxes.toFixed(2)}</p>
         total = <p> Total: ${totalAfterTaxes.toFixed(2)}</p>

    }
    
    
    const showTitle = props.filteredItems.length > 0
    return (
        
        <div>
            <h1>{showTitle ? 'My Order' : 'No Items Added...' }</h1>
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
             {subtotal}
             {tax}
             {total}
             {button}
            
          
        </div>
    )
}
