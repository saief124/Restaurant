import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function MenuItem(props) {

    const style = {
        fontSize: 20,
        color: "#DF2424",
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
                  <Col>{props.item.description}</Col>
                  </Row>
                  <Row></Row>
                </Container>
               </p>
      </div>
    )
}
