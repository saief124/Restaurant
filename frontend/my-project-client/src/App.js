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
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'

class App extends React.Component { 

    render(){
      return (
        <div className="App">
          <Router> 
            <NavBar />
            <Route exact path ="/" component= {LandingPage} />
            <Route exact path ="/menu" component= {Menu} />
            <Route exact path ="/about" component= {About} />
            <Route exact path ="/contact" component= {Contact} />
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
