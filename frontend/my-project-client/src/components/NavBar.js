import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import OrderContainer from './OrderBtn'
import Login from './Login'

import Logo from '../images/Logo.svg'

function NavBar() {
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
                    <NavDropdown.Item href="#action/3.1">Appetizers</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Entrees</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Desserts</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact & Info </Nav.Link>
                <OrderContainer />
            </Nav>
        </Navbar>
    )
}

export default NavBar;
