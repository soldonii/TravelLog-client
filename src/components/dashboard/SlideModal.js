import React, { Fragment } from 'react';
import styled from 'styled-components';

const SlideModal = ({
  shouldModalOpen,
  setShouldModalOpen,
}) => (
  <Fragment>
    <ModalOverlay open={shouldModalOpen} onClick={() => setShouldModalOpen(false)} />
    <ModalWrapper open={shouldModalOpen}>
      <ModalContent>
        <h1>hello</h1>
      </ModalContent>
    </ModalWrapper>
  </Fragment>
);

const ModalOverlay = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${props => props.open ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

const ModalWrapper = styled.div`
  height: 100vh;
  width: 75vw;
  background-color: lightgoldenrodyellow;
  position: fixed;
  top: 0;
  display: ${props => props.open ? 'block' : 'none'};
  right: ${props => props.open ? 0 : '-100%'};
  z-index: 1;
  transition: all 0.5s ease-in-out;
  display: flex;
`;

const ModalContent = styled.div`
  height: 100%;
  width: 100%;
  padding: 7rem 2rem 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
`;

export default SlideModal;
