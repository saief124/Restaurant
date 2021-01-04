import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import OrderContainer from './OrderBtn'
import Login from './Login'

import Logo from '../images/Logo.svg'
const handleLoginRender=(isLoggedIn)=>{
    if (isLoggedIn){
        return (
            <>
            <Nav.Link href="/logout">Logout</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
            <OrderContainer />
            </>
        )
    }else{
    return (
        <>
        <Nav.Link href="/signup">Sign Up</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link> 
        </>
    )
    }
}
function NavBar(props) {
    // console.log('NavBar Renders again', props.isLoggedIn)
    return (
        <Navbar bg="light" expand="lg" >
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src= {Logo}
                    width="60"
                    height="50"
                    className="d-inline-block align-top"
                 />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            </Navbar.Collapse>
            <Nav className="mr-auto" >
                 <NavDropdown title="Menu" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/menu">Full Menu</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.1">Breakfast</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Baked Goods</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Appetizers</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Salads</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact & Info </Nav.Link>

                {
                handleLoginRender(props.isLoggedIn)
                /* <Nav.Link href="/signup">Sign Up</Nav.Link>
                {props.isLoggedIn?
                <Nav.Link href="/login">Login</Nav.Link> : <Nav.Link href="/logout">Logout</Nav.Link>} */}
                
            </Nav>
        </Navbar>
    )
}

export default NavBar;
