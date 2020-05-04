import styled from 'styled-components';
import * as colors from '../../lib/colors';

export const Login = {
  CoverImage: styled.section`
    background-image: url(${props => props.imageUrl});
    width: 50vw;
    height: 100vh;
    background-size: cover;
  `,
  CoverDescription: styled.section`
    width: 50vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: ${colors.MAIN_COLOR};
  `,
  TextContainer: styled.div`
    width: 32vw;
    height: 60vh;
    color: white;
    margin-top: 15vh;

    h1 {
      font-size: 7rem;
      margin-bottom: 2rem;
    }

    h3 {
      font-size: 3rem;
      margin-bottom: 2rem;
    }

    img {
      margin: 40vh 0 0 22vw;
      width: 15rem;
      cursor: pointer;
    }
  `
};

