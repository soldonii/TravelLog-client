import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SlideInModal = ({
  shouldModalOpen,
  setShouldModalOpen,
  children
}) => (
  <Fragment>
    <ModalOverlay open={shouldModalOpen} onClick={() => setShouldModalOpen(false)} />
    <ModalWrapper open={shouldModalOpen}>
      {children}
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
  position: fixed;
  top: 0;
  display: ${props => props.open ? 'block' : 'none'};
  right: ${props => props.open ? 0 : '-100%'};
  z-index: 1;
  transition: all 0.5s ease-in-out;
  display: flex;
  background: white;
`;

SlideInModal.propTypes = {
  shouldModalOpen: PropTypes.bool.isRequired,
  setShouldModalOpen: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default SlideInModal;
