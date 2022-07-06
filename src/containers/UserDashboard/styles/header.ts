import styled from 'styled-components';
import { Box, Button, Container, Typography } from '@mui/material';

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 12rem;
  margin-top: 3rem;
  @media (max-width: 800px) {
    height: fit-content;
    padding-left: 5rem;
    flex-direction: column;
  }
  @media (max-width: 500px) {
    padding-left: 2rem;
    padding-right: 0;
  }
`;

export const StyledIconContainer = styled(Container)`
  width: 10rem;
  height: 10rem;
  border-radius: 76px;
  background-color: #d7e5e2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding-left: 0;
  padding-right: 0;
  @media (min-width: 800px) {
    width: 7rem;
    height: 7rem;
  }
  @media (min-width: 1220px) {
    width: 10rem;
    height: 10rem;
  }
`;

export const StyledProfileData = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 8rem;
  justify-content: space-between;
  margin-top: 2rem;
  @media (min-width: 800px) {
    width: 30%;
    align-items: flex-start;
    height: 10rem;
    margin-top: 0;
  }
  @media (min-width: 1220px) {
    align-items: flex-start;
    width: 20%;
    height: 10rem;
    margin-top: 0;
  }
`;
export const StyledOrderBox = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 9rem;
  margin-top: 2rem;
  width: 50%;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  @media (min-width: 800px) {
    width: 30%;
    height: 10rem;
    margin-top: 0;
  }
  @media (min-width: 1220px) {
    width: 30%;
    height: 10rem;
    margin-top: 0;
  }
`;

export const StyledButton = styled(Button)`
  border-color: #ff8149;
  color: #ff8149;
  width: 15rem;
  @media (min-width: 800px) {
    width: 14rem;
  }
  @media (min-width: 1000px) {
    width: 100%;
  }
  :hover {
    border-color: #ff8149;
    background-color: #ff8149;
    color: white;
  }
`;

export const StyledTypography = styled(Typography)`
  @media (max-width: 1220px) {
    font-size: 1.5rem;
  }
`;
export const StyledTitleTypography = styled(Typography)`
  @media (max-width: 1220px) {
    font-size: 1.8rem;
  }
`;
