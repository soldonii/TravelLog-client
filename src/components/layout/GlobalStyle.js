import { createGlobalStyle } from 'styled-components';
import * as colors from '../../lib/colors';

import NanumSquareRegular from '../../assets/font/NanumSquareRegular.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NanumSquareRegular';
    src: local('NanumSquareRegular'),
         url(${NanumSquareRegular}) format('ttf');
  }

  html, body {
    padding: 0;
    margin: 0;
    font-size: 10px;
    font-family: 'NanumSquareRegular', sans-serif;
  }

  body {
    min-height: 100vh;
    color: black;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  a, a:link, a:visited {
    text-decoration: none;
    margin: 0 1rem;
  }

  a:hover {
    color: ${colors.HIGHLIGHT_COLOR};
    transition: all 0.3s;
  }
`;

export default GlobalStyle;
