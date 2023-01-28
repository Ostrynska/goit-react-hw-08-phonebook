import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: 700;
  color: #2a363b;
  &.active {
    color: #ffff;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  margin-left: auto;
`;
