import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #fff7e8;
  font-weight: 700;
  color: #2a363b;
  &:not(:last-child) {
    margin-right: 20px;
  }
  &.active {
    color: #d85841;
  }
`;
