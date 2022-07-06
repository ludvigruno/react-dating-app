import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Toolbar, Typography, AppBar } from '@mui/material';

export const StyledLink = styled(Link)`
  display: block;
  color: white;
  margin: 1rem;
  text-decoration: none;
  padding: 6px 8px;
  font-size: 0.938rem;
  @media (max-width: 400px) {
    margin: 0.5rem;
  }
`;
export const StyledLoginLink = styled(Link)`
  display: block;
  color: white;
  margin: 1rem;
  text-decoration: none;
  padding: 6px 8px;
  font-size: 0.938rem;
  @media (max-width: 350px) {
    font-size: 13px;
    margin: 0;
  }
`;
export const StyledRegisterLink = styled(StyledLink)`
  background-color: #d7e5e2;
  color: black;
  padding: 6px 10px;
  border-radius: 4px;
  @media (max-width: 350px) {
    margin: 0;
    margin-left: 5px;
    font-size: 13px;
    padding: 6px 6px;
  }
`;
export const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const StyledToolbar = styled(Toolbar)`
  background-color: #40686b;
  display: flex;
  justify-content: center;
  margin-top: auto;
  height: 7vh;
  width: 100%;
  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: auto;
  }
`;

export const StyledTypography = styled(Typography)`
  color: white;
  @media (max-width: 400px) {
    margin: 0.5rem;
    margin-top: 1rem;
  }
`;

export const StyledAppBar = styled(AppBar)`
  position: fixed;
  background-color: #40686b;
`;

export const AppBarTypography = styled(Typography)`
  flex-grow: 1;
  @media (max-width: 350px) {
    font-size: 16px;
  }
`;
export const StyledSellerLink = styled(Link)`
  display: block;
  color: white;
  margin: 1rem;
  font-size: 18px;
  @media (max-width: 400px) {
    margin: 0.5rem;
  }
`;
