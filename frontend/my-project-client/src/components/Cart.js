import React from 'react'
let item_orderUrl = "http://localhost:3000/item_orders"
class Cart extends React.Component {
    state={
        cart_items: []
    }


    componentDidMount(){
        fetch(item_orderUrl)
        .then(res=>res.json())
        .then(cart_items=> this.setState({cart_items}))
    }
    
    render(){
        console.log(this.state.cart_items[0])
    return (
        <div>
            <h4>Cart number: {localStorage.getItem('cart_id')}</h4><br></br>
            <h4>Item Name:{"this.state.cart_items[0]"}</h4><br></br>
            <h4>Item Price:</h4><br></br>
            <h4>Item description:</h4><br></br>
            <h4>Order Total:</h4>
           
            <button onClick={()=>console.log("delete")}>Delete</button>
            <button onClick={()=>console.log("clicked")}>Add</button>
        </div>
    )
    }
}
export default Cart