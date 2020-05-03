import axios from 'axios';

export const setTokenToHeader = token => {
  if (token) {
    return axios.defaults.headers.common['x-access-token'] = token;
  }

  delete axios.defaults.headers.common['x-access-token'];
};

const DAY = ['일', '월', '화', '수', '목', '금', '토'];
// const dateArray = ['Tue May 19 2020 00:00:00 GMT+0900 (Korean Standard Time)', ' Wed May 27 2020 23:59:59 GMT+0900 (Korean Standard Time)'];

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
