import React, { useState } from 'react';
import { GoogleMap, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';

import * as parksData from './skateboard.json';
import mapStyle from '../../lib/mapStyle.json';

const Map = ({ coordinates }) => {
  const [ selectedPark, setSelectedPark ] = useState(null);

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={ { lat: 37.566536, lng: 126.977966 }}
      defaultOptions={{ styles: mapStyle }}
      center={{ lat: coordinates[0].lat, lng: coordinates[0].lng }}
    >
      {coordinates.length && coordinates.map((co, idx) => (
        <Marker
          key={idx}
          // position={{ lat: co[0], lng: co[1] }}
          onClick={() => {}}
        />
      ))}
      {/* {coordinates.lat && (
        <InfoWindow position={{
          lat: coordinates.lat,
          lng: coordinates.lng
        }}
        onCloseClick={() => {
          setSelectedPark(null)
        }}
        >
          <div>
            <h2>{selectedPark.properties.NAME}</h2>
            <p>{selectedPark.properties.DESCRIPTON}</p>
          </div>
        </InfoWindow>
      )} */}
    </GoogleMap>
  );
};

const WrappedMap = withGoogleMap(Map);

export default WrappedMap;
