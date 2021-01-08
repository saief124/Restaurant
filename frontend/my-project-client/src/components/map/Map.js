import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
// import locationIcon from '@iconify/icons-mdi/map-marker'

// npm install --save-dev @iconify/react @iconify-icons/carbon



// import locationPin from '@iconify-icons/entypo/location-pin';


import locationHeartFilled from '@iconify-icons/carbon/location-heart-filled';



import './map.css'

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationHeartFilled} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)


const Map = ({ location, zoomLevel }) => (
    <div className="map">  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )
  export default Map