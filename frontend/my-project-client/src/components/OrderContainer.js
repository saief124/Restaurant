import React from 'react'
import RMenu from './RMenu'
import CartContainer from './CartContainer'

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
      
    render(){
        // console.log(this.state.myorders)
    return (

        <div>
            <h1> Order container</h1>
            <RMenu menu={this.state.menu} handleOrders={this.handleOrders}/>
            <CartContainer myorders={this.state.myorders} />
        </div>
    )
    }
}

export default OrderContainer;