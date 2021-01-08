import React from 'react'
import ReceiptChild from './ReceiptChild';
import { Container, Row, Col, Button } from 'react-bootstrap'

export default function ReceiptContainer(props) {

    let prices = props.filteredItems.map(food => parseFloat(food.menu_item.price))
    let totalBeforeTaxes = prices.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    
    let price = props.filteredItems.length
    let button
    let subtotal
    let taxes = totalBeforeTaxes * .082
    let totalAfterTaxes = totalBeforeTaxes + taxes
    let tax
    let total
    const style = {
        fontFamily: "Russo One",
        fontSize: 35,
        backgroundColor: '#F1F1E2',
        justifyContent: 'center',
        color: "#A370A7"
    }

    const subStyle = {
        fontsize: 10
    }

    const totalStyle = {
        fontSize: 25
    }

    subtotal = <p style={subStyle}>  ${totalBeforeTaxes.toFixed(2)} </p>
    tax = <p style={subStyle}>${taxes.toFixed(2)}</p>
    total = <p style={totalStyle}> ${totalAfterTaxes.toFixed(2)}</p>

    if (price > 0) {
      button = <Button variant="info" onClick={() =>  window.location.href='checkout'}> Checkout</Button>
    }
    
    localStorage.setItem('total',`${totalAfterTaxes}`)
    const showTitle = props.filteredItems.length > 0

    return (
        <div>
            { props.filteredItems.map((order, index) =>
                    <ReceiptChild
                        key={index}
                        myorder={order} />)
            }
            <br></br>

            <Container> 
                <Row>
                    <Col sm={9}> Subtotal: </Col>
                    <Col> {subtotal}</Col>
                </Row> 
                <Row>
                    <Col sm={9}> Taxes: </Col>
                    <Col> {tax}</Col>
                </Row> 
                <Row>
                    <Col sm={9}> Total: </Col>
                    <Col> {total}</Col>
                </Row> 
                <Row> 
                </Row>
            </Container>
          
        </div>
    )
}
