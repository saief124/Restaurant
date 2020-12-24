import React from 'react'
import MenuItem from './MenuItem'
import LMenu from './LMenu'

let menuUrl = "http://localhost:3001/menu_items"

class Menu extends React.Component {
    constructor() { 
        super()
        this.state = {
          menu: []
        }
      }
  
      componentDidMount() {
        fetch(menuUrl)
        .then(res => res.json())
        .then(menu => this.setState({menu}))
      }

    render(){
        return (
        <div>
            <h1> Menu Container</h1>
            <LMenu menu={this.state.menu} />
        </div>
    )
}}

export default Menu;