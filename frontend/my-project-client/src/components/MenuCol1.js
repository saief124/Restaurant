import React from 'react'
import MenuItem from './MenuItem'
import { Columns } from 'react-bulma-components'


export default function MenuCol1(props) {
    const appetizers = props.menu.filter(item => item.category === "Starters")
    const bakery= props.menu.filter(item=> item.category === "Sandwiches")
    const salads= props.menu.filter(item=>item.category === "Tossed Salads")
    const style = {
        fontFamily: "Russo One",
        backgroundColor: '#F1F1E2',
        color: "#A370A7"
    }

    return (
        <div className="column is-6">        
        <h2 style={style}> S T A R T E R S</h2>
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
        <h2 style={style}> S A L A D S </h2>
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
        <h2 style={style}> S A N D W I C H E S </h2>
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
        </div>
    )
}
