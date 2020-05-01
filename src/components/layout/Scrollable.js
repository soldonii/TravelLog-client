import React from 'react';
import styled from 'styled-components';

const Scrollable = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 0 5px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default Scrollable;
