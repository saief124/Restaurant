import React, { useState }  from 'react'
import {Button, Modal} from 'react-bootstrap'
import {BsPersonFill} from 'react-icons/bs'

function Login() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="danger" onClick={handleShow}>
            <BsPersonFill /> Login        
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Your order</Modal.Title>
          </Modal.Header>
          <Modal.Body>Food Item // Price</Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose} href="/checkout">
              Checkout
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  

export default Login;