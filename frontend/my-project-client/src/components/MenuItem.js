import React from 'react'

export default function MenuItem(props) {
    return (
        <div>
            <br></br>
            <p>{props.item.name} ---  ${props.item.price}</p>
            <p>{props.item.description}</p>
            <button onClick={()=>props.handleOrders(props.item)}>Add Item+</button>
            
        </div>
    )
}
