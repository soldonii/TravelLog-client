import React from 'react';
import { mount } from 'enzyme';
import Accomodations from '../Accomodations';

describe('<Accomodation /> component', () => {
  const onAccomodationLinkClick = jest.fn();
  it('should render with props.', () => {
    const items = [{
      description: 'description',
      title: 'airbnb title',
      infoList: ['집 한채', '수건 완비'],
      price: ['50000'],
      image: 'image src',
      link: 'airbnb link'
    }];
    const wrapper = mount(<Accomodations items={items} onAccomodationLinkClick={onAccomodationLinkClick} />);
    expect(wrapper.find('img').props().alt).toEqual('accomodation');
    expect(wrapper.find('.accomodation-title').text()).toEqual('airbnb title');
    expect(wrapper.html().includes('집 한채')).toBe(true);
    expect(wrapper.html().includes('수건 완비')).toBe(true);
    expect(wrapper.find('.price').text()).toEqual('₩50000원');
  });
});
