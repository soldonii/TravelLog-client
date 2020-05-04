import axios from 'axios';
import { useEffect, useRef } from 'react';
import latlngs from '../lib/latlng.json';

export const setTokenToHeader = token => {
  if (token) {
    return axios.defaults.headers.common['x-access-token'] = token;
  }

  delete axios.defaults.headers.common['x-access-token'];
};

const DAY = ['일', '월', '화', '수', '목', '금', '토'];

const getDaysArray = dateArray => {
  const [ startDate, endDate ] = dateArray;

  const arr = [];
  for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
    arr.push(new Date(date));
  }

  return arr;
};

export const getDayList = dateArray => {
  const dayList = getDaysArray(dateArray);

  return dayList.map(date => {
    const timezoneOffset = new Date().getTimezoneOffset() * 60000;
    const timezoneDate = new Date(date - timezoneOffset);

    const dateStr = timezoneDate.toISOString().slice(0, 10);
    const day = DAY[timezoneDate.getDay()];

    return `${dateStr}(${day})`;
  });
};

export const numberWithCommas = number => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const usePrevious = value => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

const SEOUL_LATLNG = {
  lat: 37.566536,
  lng: 126.977966
};

export const getDefaultLatLng = travelCountry => {
  let currentLatLng;

  if (travelCountry) {
    const currentCountry = latlngs.ref_country_codes.find(item => {
      return item.country.toLowerCase() === travelCountry.toLowerCase();
    });

    if (currentCountry) {
      currentLatLng = { lat: currentCountry.latitude, lng: currentCountry.longitude }
    } else {
      currentLatLng = { lat: SEOUL_LATLNG.lat, lng: SEOUL_LATLNG.lng }
    }
  } else {
    currentLatLng = { lat: SEOUL_LATLNG.lat, lng: SEOUL_LATLNG.lng }
  }

  return currentLatLng;
};
