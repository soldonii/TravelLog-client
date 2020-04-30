import styled from 'styled-components';
import * as colors from '../../lib/colors';

const Button = styled.button`
  background-color: ${colors.MAIN_COLOR};
  color: white;
  font-size: 1.5rem;
  padding: 1rem 1.5rem;
  border: 0;
  border-radius: 2rem;
  cursor: pointer;

  &:hover {
    background-color: ${colors.HIGHLIGHT_COLOR};
    transition: all 0.3s;
  }
`;

export default Button;
