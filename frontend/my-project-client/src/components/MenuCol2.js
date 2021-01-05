import React from 'react'
import MenuItem from './MenuItem'
import { Columns } from 'react-bulma-components'

export default function MenuCol2(props) {
    const breakfast = props.menu.filter(item => 
        item.category !== "Appetizers" &&
        item.category !== "Salads" && 
        item.category !== "Bakery" && 
        item.category !== "Breakfast Side Orders" &&
        item.category !== "Juicy Fruits")
    const appetizers = props.menu.filter(item => item.category === "Appetizers")
    const bakery= props.menu.filter(item=> item.category === "Bakery")
    const salads= props.menu.filter(item=>item.category === "Salads")
    const breakfastsides= props.menu.filter(item=>
        item.category === "Breakfast Side Orders" || 
        item.category === "Juicy Fruits")
    const juicyfruits= props.menu.filter(item=>item.category === "Juicy Fruits")
    
    const style = {
        fontFamily: "Wendy One",
        backgroundColor: '#EBEB88'
    }

    return (
        <div>
        <h2 style={style} > Breakfast </h2>
        
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
