import flight from '../../assets/images/categories/flight.png';
import accomodation from '../../assets/images/categories/accomodation.png';
import food from '../../assets/images/categories/food.png';
import shopping from '../../assets/images/categories/shopping.png';
import sightseeing from '../../assets/images/categories/sightseeing.png';
import transport from '../../assets/images/categories/transport.png';
import etc from '../../assets/images/categories/etc.png';

export const icons = {
  flight: {
    icon: flight,
    name: '항공'
  },
  accomodation: {
    icon: accomodation,
    name: '숙박'
  },
  food: {
    icon: food,
    name: '식비'
  },
  shopping: {
    icon: shopping,
    name: '쇼핑'
  },
  sightseeing: {
    icon: sightseeing,
    name: '관광'
  },
  transport: {
    icon: transport,
    name: '교통'
  },
  etc: {
    icon: etc,
    name: '기타'
  }
};

export const iconsByName = {
  항공: flight,
  숙박: accomodation,
  식비: food,
  쇼핑: shopping,
  관광: sightseeing,
  교통: transport,
  기타: etc
};
