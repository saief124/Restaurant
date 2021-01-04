import React, { useState }  from 'react'
import {Button} from 'react-bootstrap'



function OrderBtn() {
    return (
        <div>
            <Button variant="danger" href="/order">
              Order Online
            </Button>        
    </div>
    )
}

export default OrderBtn;