import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DefaultLayout = ({
  children,
  img,
  style
}) => (
  <Wrapper backgroundImg={img} style={style}>
    {children}
  </Wrapper>
);

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

DefaultLayout.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
};

export default DefaultLayout;
