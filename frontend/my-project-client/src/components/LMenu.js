import React from 'react'
import MenuItem from './MenuItem'
import { Columns } from 'react-bulma-components'

export default function LMenu(props) {
    const breakfast = props.menu.filter(item => 
        item.category !== "Appetizers" &&
        item.category !== "Salads" && 
        item.category !== "Bakery" && 
        item.category !== "Breakfast Side Orders" &&
        item.category !== "Juicy Fruits")
    const appetizers = props.menu.filter(item => item.category == "Appetizers")

    return (
        <div className="column is-6">
        <h2> Breakfast </h2>
        <Columns> 
            <Columns.Column> 
                {breakfast.map(item => 
                    <MenuItem 
                    key={item.id} 
                    item={item} 
                    price={item.price}
                    description={item.description}
                />)}
            </Columns.Column> 
        </Columns>

        </div>
    )
}
