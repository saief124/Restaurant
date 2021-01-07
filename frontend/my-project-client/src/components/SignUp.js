import React from 'react'
import { Component } from 'react';
import {withRouter} from 'react-router';
import {Button} from 'react-bootstrap'

// let cartUrl = "http://localhost:3000/carts"

class SignUp extends Component {
    constructor(){
        super()
        this.state={
            name:"",
            address:"",
            phone:"",
            password:""

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
            customer:{
                name: this.state.name,
                phone_number: this.state.phone,
                address: this.state.address,
                password: this.state.password
                
            }
            
        }

        
        fetch('http://localhost:3000/signup',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCustomer)
        }).then(res=>res.json())
        .then(token=> {
            localStorage.setItem('auth_key', token["auth_key"])
            this.props.handleLogin()
            this.props.history.push('./')
          })
    }


    render(){
    return (
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="name" value={this.state.name} placeholder ="Username" onChange={this.handleChange}/><br></br>
            <input type="text" name="address" value={this.state.address} placeholder ="Address" onChange={this.handleChange}/><br></br>
            <input type="text" name="phone" value={this.state.phone} placeholder ="Phone Number" onChange={this.handleChange}/><br></br>
            <input type="password" name="password" value={this.state.password} placeholder= "Password" onChange={this.handleChange}/><br></br>
            <Button type="submit" text-align="center">Submit</Button>
            
        </form>
    )
    }
}

export default withRouter(SignUp);