import React, { useState } from 'react'
import RMenu from './RMenu'
import { Row, Col, Nav, Container, Button, DropdownButton, Dropdown } from 'react-bootstrap'
import CartSideBtn from './CartSideBtn'

let menuUrl = "http://localhost:3000/menu_items"
let item_orderUrl = "http://localhost:3000/item_orders"

class OrderContainer extends React.Component {
    state={
        menu: [],
        myorders:[],
        filter: 'All'
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
            <Container fluid> 
            <br/>
            <Row> 
                <Col sm={11}> 
                </Col>
                <Col> 
                    <Nav defaultActiveKey="/home" >
                        <Nav.Item align="right"> <CartSideBtn /> </Nav.Item> <br/><br/>
                    </Nav> 
                </Col>
            </Row> 

            <Row> 
                <Col> <RMenu menu={this.state.menu} handleOrders={this.handleOrders}/> </Col>
            </Row>
            </Container>

        </div>
    )
    }
}

export default OrderContainer;