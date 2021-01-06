import React from 'react'
import { Component } from 'react';
import {withRouter} from 'react-router';

class Login extends Component {
  constructor(){
      super()
      this.state={
          name:"",
          password:"",
          
      }
  }

  handleChange=(e)=> {
      const {name, value} = e.target
      this.setState({
          [name]: value
      })
  }

  handleSubmit=(e)=>{
      e.preventDefault()
      const newCustomer= {
              name: this.state.name,            
              password: this.state.password    
      }
      
      fetch('http://localhost:3000/login',{
          method: 'POST',
          headers:{
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(newCustomer)
      }).then(res=>res.json())
      .then(token=> {
        if (token["auth_key"]){
        localStorage.setItem('auth_key', token["auth_key"])
        this.props.handleLogin()
        this.props.history.push('./')
        }else{
         alert(token["msg"])
        }
      })
    
  }

  render(){
  return (
      <form onSubmit={this.handleSubmit}>
          <h1>Login</h1>
          <input type="text" name="name" value={this.state.name} placeholder ="Name" onChange={this.handleChange}/><br></br>        
          <input type="password" name="password" value={this.state.password} placeholder= "password" onChange={this.handleChange}/><br></br>
          <button>Submit</button>
          <h4>{this.state.errorMsg}</h4>
      </form>
  )
  }
}

export default withRouter(Login);