import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';

export const AppBarStyled = styled(AppBar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled(NavLink)`
  display: flex;
  text-decoration: none;
  color: #fff5f0;
`;
