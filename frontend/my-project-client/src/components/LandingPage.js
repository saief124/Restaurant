import React from 'react'
import {Carousel} from 'react-bootstrap'


function LandingPage() {
    return (
        <Carousel>
            <Carousel.Item interval={5000}>
                <img
                className="d-block w-100"
                src="https://live.staticflickr.com/65535/50752597247_feee1ba908_o.png"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                className="d-block w-100"
                src="https://live.staticflickr.com/65535/50751730128_8f06f57bd5_o.png"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                className="d-block w-100"
                src="https://live.staticflickr.com/65535/50752616692_48603398ca_o.png"
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default LandingPage


