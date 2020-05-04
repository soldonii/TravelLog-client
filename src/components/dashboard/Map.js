import React, { useEffect } from 'react';
import { GoogleMap, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';

import { getDefaultLatLng } from '../../lib/index';
import mapStyle from '../../lib/mapStyle.json';

const Map = ({ coordinates, travelCountry }) => {
  const currentLatLng = getDefaultLatLng(travelCountry);
  console.log('cor', coordinates);
  console.log('culang', currentLatLng);

  return (
    <GoogleMap
      defaultZoom={10}
      defaultOptions={{ styles: mapStyle }}
      center={currentLatLng ?
        currentLatLng :
        { lat: coordinates[0].lat, lng: coordinates[0].lng }}
    >
      {coordinates.length && coordinates.map((co, idx) => (
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
