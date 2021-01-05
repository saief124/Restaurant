import React, { useState }  from 'react'
import {Button} from 'react-bootstrap'
import Login from './Login'

function LoginBtn() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="danger">
              Order Online
            </Button>        
    </div>
    )
}

export default LoginBtn;