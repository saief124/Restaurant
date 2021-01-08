import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Map from './map/Map'


function Contact() {

    const style = {
        fontFamily: "Russo One",
        fontSize: 35,
        backgroundColor: '#F1F1E2',
        justifyContent: 'center',
        color: "#A370A7"

    }

    const sub = {
        textAlign: "center",
        fontFamily: "PT Sans"
    }
    const location = {
        address: '1920 S Congress Ave, Austin, TX 78704',
        lat: 30.30283476857588, 
        lng:-97.75662584000072,
      }

    return (
        <div>
            <Container> 
                <Row style={style}> A B O U T </Row><br></br>
                <Row style={sub}> 
                The Magnolia Cafe started in 1979 on Lake Austin Boulevard, and expanded to South Congress in 1988. 
                Through the decades, we have had the privilege of seeing multiple generations of our community from near and far come through our doors and create memories in our booths. 
                We’ve gotten older, and the city has grown too. We are honored to still be standing today at our South Congress location. 
                Businesses like ours — small, family owned, community-powered — will not be able to survive the challenges of the Covid-19 era without your support. We are grateful for the ways you bring our food and energy into your lives and routines. It’s nice to see you, and thank you for coming back!
                We are currently open every day from 8 am - 10 pm with many options to enjoy our food. Contact-free curbside pickup is available with online ordering, as is Favor delivery, and we have dine-in service every day of the week with limited hours on our beautiful garden patio and air conditioned dining room. <br/> <br/>
                
                Hope to see you soon. <br/> <br/>
                </Row>
                <Row style={style}> L O C A T I O N </Row> <br></br>
                <Map location={location} zoomLevel={17}/> 
                {/* <Row style={style}> C O N T A C T </Row> <br></br>
                <Row style={sub}> Text text text</Row> <br></br> */}

            </Container>
        </div>
    )
}

export default Contact;