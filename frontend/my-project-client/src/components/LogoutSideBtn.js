import {OverlayTrigger, Tooltip} from 'react-bootstrap'
import { IoIosLogOut } from 'react-icons/io';

export default function LogoutSideBtn() {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Logout
        </Tooltip>
    )

    return (
        <div>
            {/* <Button variant="outline-info" href="/logout"> */}
            <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
             >
                    <IoIosLogOut size={25} /> 
            </OverlayTrigger>

            {/* </Button> */}
        </div>
    )
}
