import React from 'react'

export default function Cart(props) {
    console.log(props)
    return (
        <div>
            {props.myorder.name} {props.myorder.price}   {props.myorder.description}<br></br>
            {/* <button onClick={()=>props.removeOrder(props.item)}>Delete</button> */}
            <button onClick={()=>props.removeOrder(props.myorder)}>Delete</button>
        
        </div>
    )
}