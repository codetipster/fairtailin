import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
  border-radius: 50px;
  background: blue;
  white-space: nowrap;
  padding: 10px;
  color: red;
  cursor: pointer;
  justify-content: center;
  transition: all 0.2s ease-in-out;
`;
