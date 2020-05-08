import React from 'react';
import { mount } from 'enzyme';
import AccomodationCard from '../AccomodationCard';

describe('<AccomodationCard /> component', () => {
  const item = {
    description: 'description',
    title: 'airbnb title',
    infoList: ['집 한채', '수건 완비'],
    price: ['50000'],
    image: 'image src',
    link: 'airbnb link'
  };
  const onClick = jest.fn();

  it('should render children component with props.', () => {
    const wrapper = mount(<AccomodationCard
      item={item}
      description={item.description}
      title={item.title}
      infoList={item.infoList}
      price={item.price}
      image={item.image}
      link={item.link}
      mode='search'
      onClick={onClick}
    />);

    expect(wrapper.find('img').props().alt).toEqual('accomodation');
    expect(wrapper.find('.accomodation-title').text()).toEqual('airbnb title');
    expect(wrapper.html().includes('집 한채')).toBe(true);
    expect(wrapper.html().includes('수건 완비')).toBe(true);
    expect(wrapper.find('.price').text()).toEqual('₩50000원');
  });
});
