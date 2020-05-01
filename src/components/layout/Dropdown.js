import React, { useState, Fragment } from 'react';
import styled from 'styled-components'
// import PropTypes from 'prop-types';

const Dropdown = ({
  style,
  buttonName,
  items
}) => {
  const [ visibility, setVisibility ] = useState(false);

  return (
    <Fragment>
      <p onClick={() => setVisibility(!visibility)} style={{ textAlign: 'center' }}>{buttonName}</p>
      <Container style={{
        ...style,
        visibility: visibility ? 'visible' : 'hidden',
        opacity: visibility ? 1 : 0 }
      }>
        {items.map((item, idx) => (
          <div key={idx} className='dropdown-item'>
            <a href={item.link} className='link' target='_blank' rel="noopener noreferrer">
              <span className='dropdown-price'>{item.price}</span>
              <span className='dropdown-provider'>{item.provider}</span>
            </a>
          </div>
        ))}
      </Container>
    </Fragment>
  );
};

Dropdown.defaultProps = {
  style: {
    minHeight: '50px',
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
        color: red;
      }

      .dropdown-price {
        font-size: 1.5rem;
        font-weight: bold;
        margin-right: 10px;
      }
    }
  }
`;

export default Dropdown;
