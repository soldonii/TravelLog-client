import React, { useEffect } from 'react';
import { GoogleMap, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';

import mapStyle from '../../lib/mapStyle.json';

const Map = ({ coordinates }) => {
  console.log('cor[0]', coordinates[0]);
  return (
    <GoogleMap
      defaultZoom={10}
      defaultOptions={{ styles: mapStyle }}
      center={ coordinates[0] ?
        { lat: coordinates[coordinates.length - 1].lat, lng: coordinates[coordinates.length - 1].lng } :
        { lat: 0, lng: 0 }
      }
    >
      {coordinates.length && coordinates[0] && coordinates.map((co, idx) => (
        <Marker
          key={idx}
          position={{ lat: co.lat, lng: co.lng }}
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
