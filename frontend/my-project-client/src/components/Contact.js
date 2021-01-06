import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


function Contact() {

    const style = {
        fontFamily: "Russo One",
        fontSize: 35,
        backgroundColor: '#F1F1E2',
        justifyContent: 'center'
    }

    const sub = {
        textAlign: "center",
        fontFamily: "PT Sans"
    }

    return (
        <div>
            <Container> 
                <Row style={style}> L O C A T I O N </Row> <br></br>
                <Row style={sub}> Just a short walk from NYU, Silver Spurs on Houston St. & LaGuardia Pl. in New York is the perfect place to enjoy a colossal burger, brunch on the weekends, or drinks with your friends. </Row> <br></br>
                <Row style={style}> C O N T A C T </Row> <br></br>
                <Row style={sub}> Text text text</Row> <br></br>
                <Row style={style}> A B O U T </Row><br></br>
                <Row style={sub}> Tired of the same old diners in Manhattan? Look no further than Silver Spurs for a truly delicious and unique diner experience. Our extensive menu is sure to please anyone. From our appeteasers to our famous colossal burgers, sandwiches, wraps, paninis and desserts, Silver Spurs is good eating at very low prices.
                    Visit this neighborhood favorite for breakfast, lunch, or dinner, or order in on a rainy or lazy day! We offer brunch on Saturday and Sunday and have a full bar. At Silver Spurs, everything is made fresh to order and all of our meat is cut fresh at our butcher shop.
                    Silver Spurs is also available to cater your next party or corporate event. Please view our catering menu and place an order online.
                    Since opening in 1979, Silver Spurs has set out to be a unique diner in Manhattan that offers fresh food, good drinks and delicious eats. Near NYU, students, professionals, police officers and local neighborhood people come to Silver Spurs for our burgers, paninis, salads, sandwiches and brunch.
                    Some of the local favorite dishes include: Salada Lailai, The Silver Spurs Burger, Mickey Maffosa Sandwich, Fryin’ Friers, El Cubano Ruben Panini, and the Ms. Annie Oakley Sandwich. <br></br><br></br>
                    Created by Saief, Jake, & Gabbi </Row>
            </Container>
        </div>
    )
}

export default Contact;