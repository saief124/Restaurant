import {Button} from 'react-bootstrap'
import { IoIosLogOut } from 'react-icons/io';

export default function LogoutSideBtn() {
    return (
        <div>
            {/* <Button variant="outline-info" href="/logout"> */}
                    <IoIosLogOut size={25} /> 
            {/* </Button> */}
        </div>
    )
}
