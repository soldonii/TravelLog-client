import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DefaultLayout = ({ children, img }) => (
  <Wrapper backgroundImg={img}>
    {children}
  </Wrapper>
);

DefaultLayout.propTypes = {
  children: PropTypes.node
};

const Wrapper = styled.section`
  background-image: url(${props => props.backgroundImg});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  max-width: 100vw;
`;

export default DefaultLayout;
