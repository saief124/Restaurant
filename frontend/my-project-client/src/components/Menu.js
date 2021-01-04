import React from 'react'
import LMenu from './LMenu'
import CartContainer from './CartContainer'

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

    render(){
      // console.log(this.state.myorders)
        return (
        <div>
            <h1> Menu Container</h1>
            <LMenu menu={this.state.menu}/>
            {/* <CartContainer myorders={this.state.myorders} /> */}
        </div>
    )
}}

export default Menu;