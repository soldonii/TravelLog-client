import React, { Fragment } from 'react';
import { Router } from 'react-router-dom';
import { mount } from 'enzyme';

import Button from '../../layout/Button';
import Navbar from '../Navbar';

import history from '../../../lib/history';
import logo from '../../../assets/images/logo.png';

describe('<Navbar /> component', () => {
  const children =
    <Fragment>
      <Button>버튼1</Button>
      <Button>버튼2</Button>
    </Fragment>;
  it('should render with logo and children', () => {
    const wrapper = mount(
      <Router history={history}>
        <Navbar isAuthenticated={true} logo={logo}>{children}</Navbar>
      </Router>
    );

    console.log(wrapper.debug());
    const nav = wrapper.find('nav');
    expect(nav.find('a').children().at(0).props().src).toEqual('logo.png');

    
  });
});


// isAuthenticated,
//   logo,
//   children