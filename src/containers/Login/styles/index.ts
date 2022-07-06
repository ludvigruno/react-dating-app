import styled from 'styled-components';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledContainer = styled(Container)`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1000px) {
    margin-top: 7rem;
    margin-bottom: 10rem;
  }
`;

export const StyledTitleTypography = styled(Typography)`
  margin-bottom: 1rem;
  border-bottom: 3px solid #ff8149;
`;

export const StyledSubtitleTypography = styled(Typography)`
  color: gray;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 0.75rem;
  padding: 1rem;
  width: 100%;
  max-width: 500px;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;
  height: 56px;
  background-color: #ff8149;
  :hover {
    background-color: #f5763f;
  }
`;

export const StyledLink = styled(Link)`
  color: gray;
`;

export const InputsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 0.75rem;
`;
