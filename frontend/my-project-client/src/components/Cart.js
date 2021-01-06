import React from 'react'

export default function Cart(props) {
    // console.log(props)
    return (
        <div>
            <br></br>
            {props.myorder.name} -- {props.myorder.description? props.myorder.description: "No Description"} -- ${props.myorder.price}<br></br>
            
            <button onClick={()=>props.removeOrder(props.myorder)}>Delete</button>
            
        
            <button onClick={()=>props.addOrder(props.myorder)}>Add</button>
        </div>
    )
}