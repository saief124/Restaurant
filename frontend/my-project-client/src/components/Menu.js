import React from 'react'
import MenuCol2 from './MenuCol2'
import MenuCol1 from './MenuCol1'
import CartContainer from './CartContainer'
import { Container, Row, Col } from 'react-bootstrap'
// import Columns from 'react-bulma-components/lib/components/columns'


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

    render(){
        return (
        <div>
                <Container>
                  <Row>
                    <Col><MenuCol1 menu={this.state.menu}/></Col>
                    <Col><MenuCol2 menu={this.state.menu}/></Col>
                  </Row>
                </Container>
        </div>
    )
}}

export default Menu;