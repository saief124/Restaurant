import React from 'react'

export default function MenuItem(props) {
    return (
        <div>
            {props.item.name} {props.item.price}   {props.item.description}<br></br>
            <button onClick={()=>props.handleOrders(props.item)}>Add Item+</button>
        </div>
    )
}
