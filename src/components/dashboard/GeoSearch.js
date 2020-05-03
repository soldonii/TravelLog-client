import React, { useState } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import * as colors from '../../lib/colors';

import * as SC from './dashboard.styles';

const GeoSearch = ({
  location,
  setLocation,
  setCoordinates
}) => {
  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);

    setLocation(value);
    setCoordinates(latLng);
  };

  return (
    <PlacesAutocomplete value={location} onChange={setLocation} onSelect={handleSelect}>
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <SC.GeoSearch.Wrapper>
          <input {...getInputProps({ placeholder: '장소를 입력하세요.' })} />

          <SC.GeoSearch.Suggestion>
            {loading ? <div>...loading</div> : null}

            {suggestions.map(suggestion => {
              const style = {
                backgroundColor: suggestion.active ? colors.HIGHLIGHT_COLOR : '#fff',
                color: suggestion.active ? '#fff' : '#000',
                marginBottom: '0.3rem'
              };

              return (
                <div {...getSuggestionItemProps(suggestion, { style })}>
                  {suggestion.description}
                </div>
              );
            })}
          </SC.GeoSearch.Suggestion>
        </SC.GeoSearch.Wrapper>
      )}
    </PlacesAutocomplete>
  );
};

export default GeoSearch;