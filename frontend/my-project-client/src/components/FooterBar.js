import React from 'react'
import {Navbar, Nav, NavDropdown, Modal, Button, Tabs, Tab, Row, Col, Container} from 'react-bootstrap'
import { RiInstagramFill } from 'react-icons/ri';
import { FaFacebook, FaReact} from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { AiFillPhone } from 'react-icons/ai';

export default function FooterBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Text> 
                <Row> <AiFillPhone /> (512) 445-0000  </Row> 
                <Row> <MdLocationOn /> 1920 S. Congress Austin, TX 78704 </Row>
                <Row> <FaReact /> Created by Saief, Jake, & Gabbi  </Row>    
                </Navbar.Text>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                </Navbar.Collapse>
            <Nav className="mr-auto" >
             <Row> 
                    <Col sm={2}> <Nav.Link href="https://www.instagram.com/magnoliacafeaustin/"> <RiInstagramFill size="25px" /> </Nav.Link> </Col>
                    <Col> <Nav.Link href="https://www.facebook.com/magnoliacafeaustin"> <FaFacebook size="25px" /> </Nav.Link>  </Col>
            </Row>
            
            </Nav>
        </Navbar>


        </div>
    )
}
