import React from 'react'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap'


export default function ReceiptChild(props) {
    const style = {
        fontSize: 20
    }     
    
    return (
        <div>
            <br></br>
            <Container fluid>
                    <Card style={{ width: '40rem' }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                        <Row>
                            <Col sm={10} style={style}> {props.myorder.menu_item.name} </Col> 
                            <Col style={style} >${props.myorder.menu_item.price}</Col> 
                        </Row>
                        </ListGroup.Item>
                    </ListGroup>
                    </Card>
                </Container>

            
        </div>
    )
}