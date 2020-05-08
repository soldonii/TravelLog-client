import React from 'react';
import { mount } from 'enzyme';
import DefaultLayout from '../DefaultLayout';

import mockImage from '../../../assets/images/backgroundImg.jpg';

describe('<DefaultLayout /> component', () => {
  const children = <h1>hello world</h1>;
  it('should render children in default layout', () => {
    const wrapper = mount(<DefaultLayout img={mockImage}>{children}</DefaultLayout>);

    expect(wrapper.find('h1').text()).toEqual('hello world');
    expect(wrapper.children().at(0).props().backgroundImg).toEqual(mockImage);
  });
});
