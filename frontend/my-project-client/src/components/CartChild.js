import React from 'react'


export default function CartChild(props) {
    
    return (
        <div>
            <br></br>
            {props.myorder.menu_item.name}  -- ${props.myorder.menu_item.price}<br></br>
            <button onClick={()=>props.removeOrder(props.myorder)}>Delete</button>
            <button onClick={() => props.addItem(props.myorder)}>Add</button>
            
            
        </div>
    )
}