import React from 'react'
import RMenu from './RMenu'
import CartContainer from './CartContainer'
import { Row, Col } from 'react-bootstrap'

let menuUrl = "http://localhost:3000/menu_items"

class OrderContainer extends React.Component {
    state={
        menu: [],
        myorders:[]
    }

    componentDidMount() {
        fetch(menuUrl)
        .then(res => res.json())
        .then(menu => this.setState({menu}))
      }
    
    handleOrders=(item)=>{
        const newOrder=[...this.state.myorders,item]
        this.setState({myorders: newOrder})
    }
    displayTitle = () => {
        if (this.state.myorders.length > 0){
          return 'My Order'
        }
      }
    //   removeOrder = (item) => {
    //     const items = this.state.myorders.filter(food => food.id !== item.id)
    //     this.setState({
    //       myorders: items
    //     })
    //   }
    removeOrder = (item) => {
        let array = this.state.myorders;
        
        let i = array.indexOf(item);
            if (i > -1) {
                array.splice(i, 1);
            }
        this.setState({
            myorders: array
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
              <Col xs={6} md={4}>
              <h1> {this.displayTitle()}</h1>
              <CartContainer myorders={this.state.myorders} removeOrder={this.removeOrder} />
             </Col>
            </Row>
        </div>
    )
    }
}

export default OrderContainer;