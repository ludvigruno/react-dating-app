import styled from 'styled-components';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: block;
  color: white;
  text-decoration: none;
`;

export const StyledTypography = styled(Typography)`
  text-align: center;
`;

export const StyledBox = styled(Box)`
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const StyledPageButton = styled(Button)`
  color: black;
  display: block;
  margin: 0 15px;
`;

export const StyledAppBar = styled(AppBar)`
  position: fixed;
  background-color: #40686b;
`;
export const StyledIconButton = styled(IconButton)`
  padding: 0;
`;
export const StyledMenuContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;
export const StyledBoxMenu = styled(Box)`
  margin: 0 2rem;
  @media (max-width: 500px) {
    margin: 0 1rem;
  }
`;
export const StyledBoxPages = styled(MenuItem)`
  display: none;
  flex-grow: 1;
  @media (max-width: 900px) {
    display: flex;
  }
`;
export const StyledTitleTypography = styled(Typography)`
  display: flex;
  margin: 0 2rem;
  @media (max-width: 900px) {
    display: none;
  }
`;
export const StyledMenu = styled(Menu)`
  display: block;
  @media (min-width: 900px) {
    display: none;
  }
`;
export const HiddenTitle = styled(Typography)`
  display: flex;
  @media (min-width: 900px) {
    display: none;
  }
`;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-evenly;
  min-height: 6vh;
  @media (max-width: 600px) {
    justify-content: flex-end;
  }
`;
