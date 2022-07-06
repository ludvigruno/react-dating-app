import styled from 'styled-components';
import { Container } from '@mui/material';

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  overflow-x: hidden;
  position: relative;
  min-height: 70vh;
  justify-content: flex-end;
`;

export const StyledMainContent = styled(Container)`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  position: relative;
  min-height: 70vh;
`;
