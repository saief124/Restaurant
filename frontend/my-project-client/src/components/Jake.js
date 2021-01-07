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





const cartContainer=(props)=> {

    let prices = props.myorders.map(food => parseFloat(food.price))
    let total = prices.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    console.log(total)
    let price = props.myorders.length;
    let button;
    let cost
    

    if (price > 0) {

      button = <button> Checkout</button>
      cost = <p> Total: ${total} </p>

    }
    return (
        
        <div>
            {
                props.myorders.map((order, index) =>
                    <Cart
                        key={index}
                            myorder={order}
                                removeOrder={props.removeOrder}
                                    addOrder={props.addOrder}   
                    />
                )
            }
            <br></br>
             {cost}
             {button}
            
          
        </div>
    )
}



export default function Cart(props) {
    // console.log(props)
    return (
        <div>
            <br></br>
            {props.myorder.name} -- {props.myorder.description? props.myorder.description: "No Description"} -- ${props.myorder.price}<br></br>
            
            <button onClick={()=>props.removeOrder(props.myorder)}>Delete</button>
            
        
            <button onClick={()=>props.addOrder(props.myorder)}>Add</button>
        </div>
    )
}
