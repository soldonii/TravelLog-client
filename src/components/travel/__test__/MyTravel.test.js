import React from 'react';
import { mount } from 'enzyme';
import MyTravel from '../MyTravel';
import TravelCard from '../TravelCard';

import mockup from './mockup.json';

describe('<MyTravel /> component', () => {
  const getAllTravelDataMockFn = jest.fn();
  const changeTravelIdMockFn = jest.fn();

  it('should render several travel props.', () => {
    const wrapper = mount(
      <MyTravel
        userId='some user id'
        allTravels={mockup}
        getAllTravelData={getAllTravelDataMockFn}
        changeTravelId={changeTravelIdMockFn}
      />
    );

    expect(wrapper.find(TravelCard)).toHaveLength(mockup.length);

    const firstCard = wrapper.find(TravelCard).at(0);
    const firstCardDiv = firstCard.children().at(0);
    expect(firstCardDiv.props().backgroundImage).toEqual('australia_banner.jpg');

    firstCardDiv.simulate('click');
    expect(changeTravelIdMockFn).toHaveBeenCalledTimes(1);
    expect(firstCardDiv.html().includes('Australia')).toBeTruthy();
    expect(firstCardDiv.html().includes('2020-05-26(화) ~ 2020-05-30(토)')).toBeTruthy();
  });
});
