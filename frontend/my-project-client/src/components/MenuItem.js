import React from 'react'

export default function MenuItem(props) {
    return (
        <div onClick={(e) => props.addToCart(e.target.value)} >
            <option value={ props.item.name} >
                {props.item.name}
                {props.item.price}
                {props.item.description} 
            </option>
            
        </div>
    )
}
