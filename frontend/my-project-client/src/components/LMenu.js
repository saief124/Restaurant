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
    const appetizers = props.menu.filter(item => item.category === "Appetizers")
    const bakery= props.menu.filter(item=> item.category === "Bakery")
    const salads= props.menu.filter(item=>item.category === "Salads")
    const breakfastsides= props.menu.filter(item=>item.category === "Breakfast Side Orders")
    const juicyfruits= props.menu.filter(item=>item.category === "Juicy Fruits")


    return (
        <div className="column is-6">
        <h2> Breakfast </h2>
        
        <Columns> 
            <Columns.Column> 
                {breakfast.map(item => 
                    <MenuItem 
                    addToCart={props.addToCart}
                    key={item.id} 
                    item={item} 
                    price={item.price}
                    description={item.description}
                    
                />)}
            </Columns.Column> 
        </Columns>
        <h2> Breakfast Side Order</h2>
        <Columns> 
            <Columns.Column> 
                {breakfastsides.map(item => 
                    <MenuItem 
                    key={item.id} 
                    item={item} 
                    price={item.price}
                    description={item.description}
                    
                />)}
            </Columns.Column> 
        </Columns>
        <h2> Appetizers </h2>
        <Columns> 
            <Columns.Column> 
                {appetizers.map(item => 
                    <MenuItem 
                    key={item.id} 
                    item={item} 
                    price={item.price}
                    description={item.description}
                    
                />)}
            </Columns.Column> 
        </Columns>
        <h2> Bakery </h2>
        <Columns> 
            <Columns.Column> 
                {bakery.map(item => 
                    <MenuItem 
                    key={item.id} 
                    item={item} 
                    price={item.price}
                    description={item.description}
                   
                />)}
            </Columns.Column> 
        </Columns>
        <h2> Salads </h2>
        <Columns> 
            <Columns.Column> 
                {salads.map(item => 
                    <MenuItem 
                    key={item.id} 
                    item={item} 
                    price={item.price}
                    description={item.description}
                    
                />)}
            </Columns.Column> 
        </Columns>
        <h2> Juicy Fruits </h2>
        <Columns> 
            <Columns.Column> 
                {juicyfruits.map(item => 
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
