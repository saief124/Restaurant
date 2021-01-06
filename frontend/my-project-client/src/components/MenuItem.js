import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function MenuItem(props) {

    const style = {
        fontFamily: "PT Sans",
        fontSize: 20,
        color: "#54A5C4",
    } 

    return (
        <div>
            <p> 
            <Container>
                  <Row>
                   <Col sm={10} style={style} > 
                    {props.item.name}
                    </Col> 
                    <Col style={style} >${props.item.price}</Col> 
                  </Row>
                  <Row>
                  <Col fontFamily="PT Sans">{props.item.description}</Col>
                  </Row>
                  <Row></Row>
                </Container>
               </p>
      </div>
    )
}
