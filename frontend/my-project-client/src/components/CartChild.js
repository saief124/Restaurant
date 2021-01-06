import React from 'react'

export default function CartChild(props) {
    console.log(props)
    return (
        <div>
            <br></br>
            {props.myorder.menu_item.name}  -- ${props.myorder.menu_item.price}<br></br>
            {/* {props.myorder.description? props.myorder.description: "No Description"} */}
            <button onClick={()=>props.removeOrder(props.myorder)}>Delete</button>
            
        </div>
    )
}