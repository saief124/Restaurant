import React from 'react';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import LandingPage from './components/LandingPage'
import Menu from './components/Menu'
import About from './components/About'
import Contact from './components/Contact'
import OrderContainer from './components/OrderContainer'
import Cart from './components/Cart'
import SignUp from './components/SignUp'
import Login from './components/Login'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'

class App extends React.Component { 
    state={
      isLoggedIn: false
    }
    componentDidMount(){
      if(localStorage.getItem('auth_key')){
        this.setState({isLoggedIn: true})
      }
    }
    handleLogin=()=>{
      if(localStorage.getItem('auth_key')){
        this.setState({isLoggedIn: true})
      }
    }
    render(){
      
      return (
        <div className="App">
          <Router> 
            <NavBar isLoggedIn={this.state.isLoggedIn}/>
            <Route exact path ="/" component= {LandingPage} />
            <Route exact path ="/menu" component={Menu} />
            {/* //   return <Menu menu={this.state.menu} addToCart={this.addToCart} />
            // }}/> */}
            <Route exact path ="/about" component= {About} />
            <Route exact path ="/contact" component= {Contact} />
            {/* <Route exact path ="/cart" component={() => {
              return <Cart cart={this.state.cart} />
            }}/> */}
            <Route exact path ="/order" component= {()=>{
              if(localStorage.getItem('auth_key')){
                return <OrderContainer />
              }else{
                return <Redirect to="/login"/>
              }}} /> 
            <Route exact path ="/cart" component= {()=>{
              if(localStorage.getItem('auth_key')){
                return <Cart />
              }else{
                return <Redirect to="/login"/>
              }}} /> 
            <Route exact path ="/signup" component= {()=><SignUp handleLogin={this.handleLogin}/>}/>
            <Route exact path ="/login" component= {()=>{
              return <Login handleLogin={this.handleLogin}/>
            }}/>
            <Route exact path ="/logout" component = {()=>{
              localStorage.clear()
              this.setState({isLoggedIn: false})
              return <Redirect to="/login"/>
            }}/>
          </Router>
        </div>
      );

    }

}


export default App;
