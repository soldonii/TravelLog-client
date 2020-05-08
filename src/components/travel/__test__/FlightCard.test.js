import React from 'react';
import { mount } from 'enzyme';
import FlightCard from '../FlightCard';

describe('<FlightCard /> component', () => {
  const onClick = jest.fn();

  it('should render with given props.', () => {
    const currentItem = {
      airlineImageList: [
        [
          'https://content.r9cdn.net/rimg/provider-logos/airlines/v/DL.png?crop=false&width=108&height=92&fallback=default1.png&_v=c12d18e5ad31cc4d51b7c3c702b1fe1b849a76d3'
        ],
        [
          'https://content.r9cdn.net/rimg/provider-logos/airlines/v/DL.png?crop=false&width=108&height=92&fallback=default1.png&_v=c12d18e5ad31cc4d51b7c3c702b1fe1b849a76d3'
        ]
      ],
      departureTimeList: ['10:45', '06:25'],
      arrivalTimeList: ['13:36', '16:30'],
      airlinesList: ['델타항공', '델타항공'],
      layoverTimeList: ['1회 경유', '1회 경유'],
      layoverAirportList: ['DTW', 'DTW'],
      flightHoursList: ['15시간 51분', '21시간 05분'],
      airportsList: ['ICN', 'IAD', 'DCA', 'ICN'],
      priceAndProviderWithLinks: [
        {
          link: 'https://kayak.co.kr/book/flight?code=GEHCGVK7bc.ToX9mfccdpY.79374.61487f291f1dadb1245625ab99ddcbc4&h=1749c122b00c&sub=E-10aa0748700&payment=0.0000:KRW:VA:Visa:true',
          price: '972,200원',
          provider: '델타항공'
        }
      ]
    };

    const {
      airlineImageList,
      departureTimeList,
      arrivalTimeList,
      airlinesList,
      layoverTimeList,
      layoverAirportList,
      flightHoursList,
      airportsList,
      priceAndProviderWithLinks
    } = currentItem;

    const wrapper = mount(<FlightCard
      currentItem={currentItem}
      airlineImageList={airlineImageList}
      departureTimeList={departureTimeList}
      arrivalTimeList={arrivalTimeList}
      airlinesList={airlinesList}
      layoverTimeList={layoverTimeList}
      layoverAirportList={layoverAirportList}
      flightHoursList={flightHoursList}
      airportsList={airportsList}
      priceAndProviderWithLinks={priceAndProviderWithLinks}
      onClick={onClick}
      mode='search'
    />);

    expect(wrapper.find('img').at(0).prop('src')).toEqual(airlineImageList[0][0]);
    expect(wrapper.find('.departure-arrival-time').at(0).children()).toHaveLength(3);
    expect(wrapper.find('.airlines').at(0).text()).toEqual('델타항공');
    expect(wrapper.find('.layover-time').at(0).text()).toEqual('1회 경유');
    expect(wrapper.find('.layover-airport').at(0).text()).toEqual('DTW');
    expect(wrapper.find('.flight-hour').at(0).text()).toEqual('15시간 51분');
    expect(wrapper.find('.airport').at(0).text()).toEqual('ICN-IAD');
  })
});
