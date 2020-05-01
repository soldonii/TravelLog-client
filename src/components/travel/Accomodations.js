import React, { Fragment } from 'react';
import styled from 'styled-components';

import * as colors from '../../lib/colors';

import Scrollable from '../layout/Scrollable';

const Accomodations = ({ items }) => (
  <Wrapper>
    <Scrollable>
      {items.map((item, idx) => {
        const {
          description,
          title,
          infoList,
          price,
          image,
          link
        } = item;

        return (
          <AccomodationInfo key={idx} onClick={() => window.open(link, '_blank')}>
            <Image>
              <img src={image} alt='accomodation' />
            </Image>
            <Descriptions>
              <DescriptionTop>
                <p>{description}</p>
                <h1>{title}</h1>
              </DescriptionTop>
              <DescriptionMid>
                {infoList.map((info, idx) => (
                  <p key={idx}>{info}</p>
                ))}
              </DescriptionMid>
              <DescriptionBottom>
                {price.length === 1 ?
                <span className='price'>₩{price[0]}원</span> :
                <Fragment>
                  <span className='former-price'>₩{price[0]}{' '}</span>
                  <span className='price'>₩{price[1]}원</span>
                </Fragment>
                }
              </DescriptionBottom>
            </Descriptions>
          </AccomodationInfo>
        )
      })}
    </Scrollable>
  </Wrapper>
);

const Wrapper = styled.section`
  width: 50vw;
  height: 100vh;
  padding: 12vh 2vw 5vh 2vw;
`;

const AccomodationInfo = styled.div`
  width: 100%;
  height: 12.65rem;
  border-radius: 0.5rem;
  box-shadow: 0.1rem 0.1rem 0.5rem 0.2rem lightgray;
  background-color: white;
  transition: box-shadow 0.3s;
  margin: 1rem auto;
  padding: 0.2rem 0.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;

  &:hover {
    box-shadow: 0.1rem 0.1rem 0.5rem 0.2rem #101B26;
    cursor: pointer;

    .price {
      color: ${colors.HIGHLIGHT_COLOR};
    }
  }
`;

const Image = styled.div`
  height: 100%;
  width: 30%;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Descriptions = styled.div`
  height: 100%;
  width: 70%;
  padding: 0.5rem 1rem;
`;

const DescriptionTop = styled.div`
  height: 4rem;
  width: 100%;
  margin-bottom: 0.5rem;

  p {
    font-size: 1.3rem;
    color: gray;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  h1 {
    font-size: 1.7rem;
    color: black;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

const DescriptionMid = styled.div`
  height: 3.5rem;
  width: 100%;
  margin-bottom: 0.5rem;

  p {
    font-size: 1.3rem;
    color: gray;
  }
`;

const DescriptionBottom = styled.div`
  height: calc(100% - 8.5rem);
  width: 100%;
  text-align: right;

  h1 {
    font-size: 1.7rem;
  }

  .former-price {
    font-size: 1.4rem;
    color: gray;
    text-decoration: line-through;
  }

  .price {
    font-size: 2rem;
    color: black;
  }
`;


export default Accomodations;
