import React from 'react'
import MenuItem from './MenuItem'
import { Columns } from 'react-bulma-components'


export default function MenuCol1(props) {
    const appetizers = props.menu.filter(item => item.category === "Appetizers")
    const bakery= props.menu.filter(item=> item.category === "Bakery")
    const salads= props.menu.filter(item=>item.category === "Salads")
    const breakfastsides= props.menu.filter(item=>
        item.category === "Breakfast Side Orders" || 
        item.category === "Juicy Fruits")
        
    const style = {
        fontFamily: "Wendy One",
        backgroundColor: '#EBEB88'
    }

    return (
        <div className="column is-6">        
        <h2 style={style}> Appetizers</h2>
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
        <h2 style={style}> Salads </h2>
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
        <h2 style={style}> Bakery </h2>
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
        <h2 style={style}> Breakfast Side Order</h2>
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
        </div>
    )
}
