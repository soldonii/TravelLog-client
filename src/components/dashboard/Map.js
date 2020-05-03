import React, { useState } from 'react';
import { GoogleMap, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';

import * as parksData from './skateboard.json';
import mapStyle from '../../lib/mapStyle.json';

const Map = ({ coordinates }) => {
  const [ selectedPark, setSelectedPark ] = useState(null);

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 45.421532, lng: -75.697189 }}
      defaultOptions={{ styles: mapStyle }}
    >
      {parksData.features.map(park => (
        <Marker
          key={park.properties.PARK_ID}
          position={{
            lat: park.geometry.coordinates[1],
            lng: park.geometry.coordinates[0]
          }}
          onClick={() => {
            setSelectedPark(park);
          }}
        />
      ))}

      {coordinates.lat && (
        <InfoWindow position={{
          lat: coordinates.lat,
          lng: coordinates.lng
        }}
        onCloseClick={() => {
          setSelectedPark(null)
        }}
        >
          <div>
            {/* <h2>{selectedPark.properties.NAME}</h2>
            <p>{selectedPark.properties.DESCRIPTON}</p> */}
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

const WrappedMap = withGoogleMap(Map);

export default WrappedMap;
