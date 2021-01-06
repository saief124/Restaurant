import React from 'react'
import LMenu from './LMenu'
// import CartContainer from './CartContainer'
// import { Row, Col } from 'react-bootstrap'

let menuUrl = "http://localhost:3000/menu_items"

class Menu extends React.Component {
    constructor() { 
        super()
        this.state = {
          menu: [],
          // myorders:[]
        }
      }
  
      componentDidMount() {
        fetch(menuUrl)
        .then(res => res.json())
        .then(menu => this.setState({menu}))
      }

      // handleOrders=(item)=>{
      //   const newOrder=[...this.state.myorders,item]
      //   this.setState({myorders: newOrder})
      // }

      
      // displayTitle = () => {
      //   if (this.state.myorders.length > 0){
      //     return 'Cart'
      //   }
      // }
      // removeOrder = (item) => {
      //   const items = this.state.myorders.filter(food => food.id !== item.id)
      //   this.setState({
      //     myorders: items
      //   })
      // }

    render(){
      console.log(this.state.myorders)
        return (
        <div>
            {/* <Row>
              <Col xs={12} md={8}>
              <h1> Menu</h1>
              <LMenu menu={this.state.menu} handleOrders={this.handleOrders}/>
              </Col>
              <Col xs={6} md={4}>
              <h1> {this.displayTitle()}</h1>
              <CartContainer myorders={this.state.myorders} removeOrder={this.removeOrder} />
             </Col>
            </Row> */}

          
            <h1> Menu Container</h1>
            <LMenu menu={this.state.menu}/>
            {/* <CartContainer myorders={this.state.myorders} /> */}
        </div>
    )
}}

export default Menu;