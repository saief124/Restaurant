import React from 'react'
import RMenu from './RMenu'
import CartContainer from './CartContainer'

let menuUrl = "http://localhost:3000/menu_items"
let cartUrl = "http://localhost:3000/carts"

class OrderContainer extends React.Component {
    state={
        menu: [],
        myorders:[]
    }

    componentDidMount() {
        fetch(menuUrl, {
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
                'Auth-Key': localStorage.getItem('auth_key')
            }
        })
        .then(res => res.json())
        .then(menu => this.setState({menu}))
        
      }

    createCart=()=>{
        const newCart={
            total:0.0
        }

        fetch(cartUrl,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Auth-Key': localStorage.getItem('auth_key')
            },
            body: JSON.stringify(newCart)
            })
            .then(res=>res.json())
            .then(cart=> {
            //    console.log(cart)
            localStorage.setItem('cart_id', cart.id)
        })
    }  

    readytoOrder=()=>{
        this.createCart()
    }
    
    handleOrders=(item)=>{
        const newOrder=[...this.state.myorders,item]
        this.setState({myorders: newOrder})
        
    }
      
    render(){
        // console.log(this.state.myorders)
    return (

        <div>
            <h1> Order container</h1>
            <button onClick={()=>this.readytoOrder()}>Ready To Order?</button>
            <RMenu menu={this.state.menu} handleOrders={this.handleOrders}/>
            <CartContainer myorders={this.state.myorders} />
        </div>
    )
    }
}

export default OrderContainer;