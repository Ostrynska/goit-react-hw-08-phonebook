import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: 700;
  color: #fff7e8;
  &.active {
    color: #d85841;
  }
`;

export const ButtonLink = styled(Button)`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  margin-left: auto;
`;
