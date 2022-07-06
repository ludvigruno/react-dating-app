import styled from 'styled-components';
import { Container, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledContainer = styled(Container)`
  height: calc(100vh - 101px);
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledTypography = styled(Typography)`
  padding-bottom: 10px;
  border-bottom: 3px solid #ff8149;
  color: #808080;
`;

export const StyledButton = styled(Button)`
  margin-top: 1rem;
  width: 25rem;
`;

export const StyledLink = styled(Link)`
  color: gray;
`;

export const StyledSubtitleTypography = styled(Typography)`
  margin-top: 1rem;
  color: gray;
`;
