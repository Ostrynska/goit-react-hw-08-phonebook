import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #fff7e8;
  &:not(:last-child) {
    margin-right: 20px;
  }
  &.active {
    font-weight: 700;
    color: #d85841;
  }
`;
