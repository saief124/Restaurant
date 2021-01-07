import React from 'react'
import CartContainer from './CartContainer'
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
    removeOrder = (item) => {
        
        fetch(`http://localhost:3000/item_orders/${item.id}`,{
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
                'Auth-Key': localStorage.getItem('auth_key')
            }
            })
            let array = this.state.cart_items;
        
        let i = array.indexOf(item);
            if (i > -1) {
                array.splice(i, 1);
            }
        this.setState({
            cart_items: array
        })
        
    }
    
    render(){
        console.log(this.state.cart_items.filter(item=> item.cart_id == localStorage.getItem('cart_id')))
        console.log(localStorage.getItem('cart_id'))
        const filteredItems = this.state.cart_items.filter(item=> item.cart_id == localStorage.getItem('cart_id'))
        console.log(filteredItems)
    return (
        <div>
            <CartContainer filteredItems={filteredItems} removeOrder={this.removeOrder} > </CartContainer>
        </div>
    )
    }
}
export default Cart