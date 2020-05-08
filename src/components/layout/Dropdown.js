import React, { useState, Fragment } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import Scrollable from './Scrollable';

import * as colors from '../../lib/colors';

const Dropdown = ({
  style,
  buttonName,
  currentItem,
  dropDownOptions,
  onItemClick
}) => {
  const [ visibility, setVisibility ] = useState(false);

  return (
    <Fragment>
      <p onClick={() => setVisibility(!visibility)} style={{ textAlign: 'center', fontSize: '12px' }}>
        {buttonName}
      </p>
      <Container style={{
        ...style,
        visibility: visibility ? 'visible' : 'hidden',
        opacity: visibility ? 1 : 0 }
      }>
        <Scrollable>
          {dropDownOptions.map((option, idx) => (
            <div key={idx} className='dropdown-item'>
              <a
                href={option.link}
                className='link'
                target='_blank'
                rel="noopener noreferrer"
                onClick={() => {
                  setVisibility(false);
                  onItemClick(currentItem, option);
                }}
              >
                <span className='dropdown-price'>{option.price}</span>
                <span className='dropdown-provider'>{option.provider}</span>
              </a>
            </div>
          ))}
        </Scrollable>
      </Container>
    </Fragment>
  );
};

Dropdown.defaultProps = {
  style: {
    maxHeight: '150px',
    minWidth: '50px',
    width: '200px'
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  position: absolute;
  right: 0;
  z-index: 1;
  box-shadow: 0 3px 12px 1px rgba(0,0,0,0.26);
  opacity: 0;
  transition: opacity 0.3s;

  .dropdown-item {
    padding: 0 1rem;
    width: 100%;
    text-align: center;

    .link {
      height: 100%;
      width: 100%;
      text-align: left;
      margin: 5px 0;
      display: block;

      &:link, &:visited {
        color: black;
      }

      &:hover, &:active {
        color: ${colors.HIGHLIGHT_COLOR};
      }

      .dropdown-price {
        font-size: 1.5rem;
        font-weight: bold;
        margin-right: 10px;
      }
    }
  }
`;

Dropdown.propTypes = {
  style: PropTypes.object,
  buttonName: PropTypes.string,
  currentItem: PropTypes.object,
  dropDownOptions: PropTypes.array,
  onItemClick: PropTypes.func.isRequired,
};

export default Dropdown;
