import React from 'react'
import RMenu from './RMenu'
import CartContainer from './CartContainer'
import { Row, Col } from 'react-bootstrap'

let menuUrl = "http://localhost:3000/menu_items"
let cartUrl = "http://localhost:3000/carts"
let item_orderUrl = "http://localhost:3000/item_orders"

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
        // const order_item={
        //     cart_id: localStorage.getItem('cart_id'),
        //     menu_item_id: item.id
        // }
        // fetch(item_orderUrl,{
        //     method: 'POST',
        //     headers:{
        //         'Content-Type': 'application/json',
        //         'Auth-Key': localStorage.getItem('auth_key')
        //     },
        //     body: JSON.stringify(order_item)
        //     })
        //     .then(res=>res.json())
        //     .then(order=> {
        //        console.log(order)
        //     // localStorage.setItem('cart_id', cart.id)
        // })
    }
    displayTitle = () => {
        if (this.state.myorders.length > 0){
          return 'My Order'
        }
      }
    
    removeOrder = (item) => {
        const items = this.state.myorders.filter(food => food.id !== item.id)
        this.setState({
          myorders: items
        })
    }
    
    addOrder = (item)=>{
        
        const order_item={
            cart_id: localStorage.getItem('cart_id'),
            menu_item_id: item.id
        }

        fetch(item_orderUrl,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Auth-Key': localStorage.getItem('auth_key')
            },
            body: JSON.stringify(order_item)
            })
            .then(res=>res.json())
            .then(order=> {
               console.log(order)
            // localStorage.setItem('cart_id', cart.id)
        })
    }
      
    render(){
        // console.log(this.state.myorders)
    return (

        <div>

            <Row>
              <Col xs={12} md={8}>
              <h1> Order Container</h1>
              <button onClick={()=>this.readytoOrder()}>Ready To Order?</button>
              <RMenu menu={this.state.menu} handleOrders={this.handleOrders}/>
              </Col>
              <Col xs={6} md={4}>
              <h1> {this.displayTitle()}</h1>
              <CartContainer myorders={this.state.myorders} removeOrder={this.removeOrder} addOrder={this.addOrder}/>
             </Col>
            </Row>
        </div>
    )
    }
}

export default OrderContainer;