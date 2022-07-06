import {
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from '@mui/material';
import styled from 'styled-components';

export const StyledTermsGroup = styled.div`
  display: flex;
  margin-top: 15px;
  justify-content: space-between;
`;

export const StyledTermsItem = styled.div`
  &:not(:first-child) {
    margin-left: 10px;
  }
`;

export const StyledChip = styled(Chip)`
  color: #ff8149;
  border-color: rgb(255 129 73 / 70%);
  margin-bottom: 2px;
`;

export const StyledTagsGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.5rem;

  & > *:not(:last-child) {
    margin-right: 6px;
  }
`;

export const StyledCardActions = styled(CardActions)`
  padding: 0;

  button {
    border-radius: 0 0 4px 4px;
  }
`;

export const StyledCardTitle = styled(Typography)`
  font-size: 1.0625rem;
  font-weight: 500;
  line-height: 1.25;
`;

export const StyledUserDescription = styled(Typography)`
  margin: 10px 0;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
`;

export const StyledTermsTitle = styled(Typography)`
  font-size: 13px;
  color: rgba(0, 0, 0, 0.6);
`;

export const StyledCardContentGroup = styled.div`
  display: block;
`;

const FlexContainer = `
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledCard = styled(Card)`
  ${FlexContainer}
`;

export const StyledCardContent = styled(CardContent)`
  ${FlexContainer}
`;
