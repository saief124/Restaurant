import React from 'react'
import RMenu from './RMenu'
import CartContainer from './CartContainer'
import { Row, Col } from 'react-bootstrap'

let menuUrl = "http://localhost:3000/menu_items"
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
        
    handleOrders=(item)=>{

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
                        const newOrder=[...this.state.myorders,order]
                        this.setState({myorders: newOrder})
                    })
    }
        
    render(){
        
    return (

        <div>
            <Row>
              <Col xs={12} md={8}>
              <h1> Order Container</h1>
              <RMenu menu={this.state.menu} handleOrders={this.handleOrders}/>
              </Col>
          
            </Row>
        </div>
    )
    }
}

export default OrderContainer;