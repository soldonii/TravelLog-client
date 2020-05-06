import React from 'react';
import PropTypes from 'prop-types';

import { GoogleMap, withGoogleMap, Marker } from 'react-google-maps';
import mapStyle from '../../lib/mapStyle.json';

const Map = ({ coordinates }) => (
  <GoogleMap
    defaultZoom={15}
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
      />
    ))}
  </GoogleMap>
);

Map.propTypes = {
  coordinates: PropTypes.array.isRequired
};

const WrappedMap = withGoogleMap(Map);

export default WrappedMap;
