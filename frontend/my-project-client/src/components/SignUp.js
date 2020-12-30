import React from 'react'
import { Component } from 'react';

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
        //console.log(newCustomer)
        fetch('http://localhost:3000/signup',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCustomer)
        }).then(res=>res.json())
        .then(cus=>console.log(cus))
        
    }

    render(){
    return (
        <form onSubmit={this.handleSubmit}>
            <h1>Sign up</h1>
            <input type="text" name="name" value={this.state.name} placeholder ="Name" onChange={this.handleChange}/><br></br>
            <input type="text" name="address" value={this.state.address} placeholder ="Address" onChange={this.handleChange}/><br></br>
            <input type="text" name="phone" value={this.state.phone} placeholder ="Phone number" onChange={this.handleChange}/><br></br>
            <input type="text" name="password" value={this.state.password} placeholder= "password" onChange={this.handleChange}/><br></br>
            <button>Submit</button>
            
        </form>
    )
    }
}

export default SignUp;