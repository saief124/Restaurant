import React from 'react'
import CartContainer from './CartContainer'


let item_orderUrl = "http://localhost:3000/item_orders"
class Cart extends React.Component {
    state={
        cart_items: [],
        // new_items: []
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

    addItem = (item) => {
        console.log(item.menu_item_id)
        const order_item={
            cart_id: localStorage.getItem('cart_id'),
            menu_item_id: item.menu_item_id
        }
        fetch(item_orderUrl,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Auth-Key': localStorage.getItem('auth_key')
            },
            body: JSON.stringify(order_item)
            })
                    // .then(res=>res.json())
                    // .then(order=> { 
                    //     const newOrder=[...this.state.cart_items, order]
                    //     this.setState({cart_items: newOrder})
                    //     this.setState({new_items: order})
                    // })

                    // fetch(item_orderUrl)
                    // .then(res=>res.json())
                    // .then(cart_items=> this.setState({cart_items}))

                    
                    window.location.reload()
    }
    
     
    
    render(){
        // console.log(this.state.cart_items.filter(item=> item.cart_id == localStorage.getItem('cart_id')))
        // console.log(localStorage.getItem('cart_id'))
        let filteredItems = this.state.cart_items.filter(item=> item.cart_id == localStorage.getItem('cart_id'))

        // let secondItems = this.state.new_items
        // let firstItems = this.state.cart_items
        // let thirdItems = firstItems.concat(secondItems)
        // let filteredItems = thirdItems.filter(item=> item.cart_id == localStorage.getItem('cart_id'))
        // console.log(filteredItems)
    return (
        <div>
            <CartContainer filteredItems={filteredItems} removeOrder={this.removeOrder} addItem={this.addItem} > </CartContainer>
        </div>
    )
    }
}
export default Cart