import React from 'react'

export default function RMenuItem(props) {
   
    return (
        <div>
            <br></br>
            <p> {props.item.name} --- {props.item.description? props.item.description: "No Description"} --- ${props.item.price}</p>
            <button onClick={()=>props.handleOrders(props.item)}>Add Item+</button>
      </div>
    )
}