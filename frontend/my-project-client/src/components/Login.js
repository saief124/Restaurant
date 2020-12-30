// import React, { useState }  from 'react'
// import {Button, Modal} from 'react-bootstrap'
// import {BsPersonFill} from 'react-icons/bs'
import React from 'react'
import { Component } from 'react';


class Login extends Component {
  constructor(){
      super()
      this.state={
          name:"",
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
              name: this.state.name,            
              password: this.state.password    
      }
      //console.log(newCustomer)
      fetch('http://localhost:3000/login',{
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
          <h1>Login</h1>
          <input type="text" name="name" value={this.state.name} placeholder ="Name" onChange={this.handleChange}/><br></br>        
          <input type="text" name="password" value={this.state.password} placeholder= "password" onChange={this.handleChange}/><br></br>
          <button>Submit</button>
          
      </form>
  )
  }
}

// function Login() {
//     const [show, setShow] = useState(false);
  
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
  
//     return (
//       <>
//         <Button variant="danger" onClick={handleShow}>
//             <BsPersonFill /> Login        
//         </Button>
  
//         <Modal show={show} onHide={handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>Your order</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>Food Item // Price</Modal.Body>
//           <Modal.Footer>
//             <Button variant="danger" onClick={handleClose} href="/checkout">
//               Checkout
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//     );
//   }
  

export default Login;