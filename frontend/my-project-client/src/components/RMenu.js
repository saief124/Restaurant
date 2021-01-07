import React from 'react'
import RMenuItem from './RMenuItem'
import { Columns } from 'react-bulma-components'

export default function RMenu(props) {
    
    const breakfast = props.menu.filter(item => 
        item.category !== "Appetizers" &&
        item.category !== "Salads" && 
        item.category !== "Bakery" && 
        item.category !== "Breakfast Side Orders" &&
        item.category !== "Juicy Fruits")
    const starters = props.menu.filter(item => item.category === "Starters")
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
                    <RMenuItem 
                    key={item.id} 
                    item={item} 
                    price={item.price}
                    description={item.description}
                    handleOrders={props.handleOrders}
                />)}
            </Columns.Column> 
        </Columns>
        <h2> Breakfast Side Order</h2>
        <Columns> 
            <Columns.Column> 
                {breakfastsides.map(item => 
                    <RMenuItem 
                    key={item.id} 
                    item={item} 
                    price={item.price}
                    description={item.description}
                    handleOrders={props.handleOrders}
                />)}
            </Columns.Column> 
        </Columns>
        <h2> Starters </h2>
        <Columns> 
            <Columns.Column> 
                {starters.map(item => 
                    <RMenuItem 
                    key={item.id} 
                    item={item} 
                    price={item.price}
                    description={item.description}
                    handleOrders={props.handleOrders}
                />)}
            </Columns.Column> 
        </Columns>
        <h2> Bakery </h2>
        <Columns> 
            <Columns.Column> 
                {bakery.map(item => 
                    <RMenuItem 
                    key={item.id} 
                    item={item} 
                    price={item.price}
                    description={item.description}
                    handleOrders={props.handleOrders}
                />)}
            </Columns.Column> 
        </Columns>
        <h2> Salads </h2>
        <Columns> 
            <Columns.Column> 
                {salads.map(item => 
                    <RMenuItem 
                    key={item.id} 
                    item={item} 
                    price={item.price}
                    description={item.description}
                    handleOrders={props.handleOrders}
                />)}
            </Columns.Column> 
        </Columns>
        <h2> Juicy Fruits </h2>
        <Columns> 
            <Columns.Column> 
                {juicyfruits.map(item => 
                    <RMenuItem 
                    key={item.id} 
                    item={item} 
                    price={item.price}
                    description={item.description}
                    handleOrders={props.handleOrders}
                />)}
            </Columns.Column> 
        </Columns>      
        </div>
    )
}
