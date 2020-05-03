import axios from 'axios';

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
