import React from 'react'
import { CardDeck, Card, Row, Col, Button } from 'react-bootstrap'

export default function RMenuItem(props) {

    const style = {
        fontFamily: "PT Sans",
        fontSize: 20,
        color: "#54A5C4",
    } 
   
    return (
        <div>
            <br></br>
            <CardDeck>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            <Row> 
                                <Col sm={10} style={style}> {props.item.name} </Col>
                                <Col style={style}> ${props.item.price} </Col>

                            </Row>
                        </Card.Title>
                        <Card.Text>
                            {props.item.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer align="center">
                        <Button variant="outline-info" onClick={()=>props.handleOrders(props.item)}>Add to cart</Button>
                    </Card.Footer>
                </Card>
            </CardDeck>

      </div>
    )
}