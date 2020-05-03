import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import * as colors from '../../lib/colors';

const Navbar = ({
  isAuthenticated,
  logo,
  children
}) => (
  <NavWrapper>
    <Link to={isAuthenticated ? '/' : '/'}>
      <img src={logo} alt='logo'/>
    </Link>
    <LinkWrapper>
      {children}
    </LinkWrapper>
  </NavWrapper>
);

const NavWrapper = styled.nav`
  height: 10vh;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 9.5vw;
  box-shadow: 0px 1px 10px #999;
  position: absolute;

  img {
    height: 8vh;
  }
`;

const LinkWrapper = styled.div`
  font-size: 1.5rem;

  button {
    padding: 0.9rem 1.7rem;
    border: 0;
    border-radius: 2rem;
    cursor: pointer;
    font-size: 1.5rem;
  }

  a {
    background-color: white;
    padding: 0.9rem 1.7rem;
    border-radius: 2rem;
  }

  a:hover {
    color: black;
    background-color: ${colors.HIGHLIGHT_COLOR};
  }
`;

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool,
  logo: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default Navbar;
