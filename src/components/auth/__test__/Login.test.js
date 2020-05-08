import React from 'react';
import { mount } from 'enzyme';
import Login from '../Login';

describe('<Login /> component', () => {
  const mockFn = jest.fn();

  it('should render with kakao login button', () => {
    const wrapper = mount(<Login loading={false} onLoginButtonClick={mockFn} />);

    expect(wrapper.find('img').props().alt).toEqual('kakao login');
  });
});
