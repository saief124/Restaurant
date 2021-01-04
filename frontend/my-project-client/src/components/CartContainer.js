import React from 'react'
import Cart from './Cart';

const cartContainer=(props)=> {
    return (
        <div>
            {
                props.myorders.map(order=>
                    <Cart
                        key={order.id}
                            myorder={order}
                                removeOrder={props.removeOrder}
                    />
                )
            }
        </div>
    )
}

export default cartContainer;