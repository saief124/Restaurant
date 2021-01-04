import React from 'react';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import LandingPage from './components/LandingPage'
import Menu from './components/Menu'
import About from './components/About'
import Contact from './components/Contact'
import OrderContainer from './components/OrderContainer'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Cart from './components/Cart'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
let menuUrl = "http://localhost:3000/menu_items"

class App extends React.Component { 
  constructor() { 
    super()
    this.state = {
      menu: [],
      cart: []
    }
  }

  componentDidMount() {
    fetch(menuUrl)
    .then(res => res.json())
    .then(menu => this.setState({menu}))
  }
    addToCart = (value) => {
      const itemOrder = this.state.menu.find(item => item.name === value)
      this.setState({cart: [...this.state.cart, itemOrder]})
      fetch('http://localhost:3000/carts/1',{
      method: "PATCH",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(itemOrder)
    })
    }

    render(){
      console.log(this.state.cart)
      return (
        <div className="App">
          <Router> 
            <NavBar />
            <Route exact path ="/" component= {LandingPage} />
            <Route exact path ="/menu" component={() => {
              return <Menu menu={this.state.menu} addToCart={this.addToCart} />
            }}/>
            <Route exact path ="/about" component= {About} />
            <Route exact path ="/contact" component= {Contact} />
            <Route exact path ="/cart" component={() => {
              return <Cart cart={this.state.cart} />
            }}/>
            <Route exact path ="/order" component= {()=>{
              if(localStorage.getItem('auth_key')){
                return <OrderContainer />
              }else{
                return <Redirect to="/login"/>
              }}} /> 
            <Route exact path ="/signup" component= {SignUp}/>
            <Route exact path ="/login" component= {Login}/>
            <Route exact path ="/logout" component = {()=>{
              localStorage.clear()
              return <Redirect to="/login"/>
            }}/>
          </Router>
        </div>
      );

    }

}


export default App;
