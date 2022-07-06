import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  LinearProgress,
  Pagination,
  Typography,
} from '@mui/material';
import styled from 'styled-components';

export const StyledGrid = styled(Grid)`
  min-height: 93vh;
  display: flex;
  align-items: center;
`;

export const StyledContainer = styled(Container)`
  @media (max-width: 600px) {
    padding: 0;
  }
  padding: 0;
`;

export const StyledMainContainer = styled(Container)`
  display: 'flex';
  flex-direction: 'column';
  justify-content: 'space-evenly';
  overflow-x: 'hidden';
  padding: 0;
  @media (max-width: 600px) {
    padding: 0;
  }
`;

export const StyledAppContainer = styled(Container)`
  padding: 0;
  display: flex;
  flex-direction: column;
  height: auto;
`;
export const StyledTitleContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #40686b;
  height: 65vh;
  padding: 0 5rem; //FIXME
  @media (max-width: 1400px) {
    padding: 5rem 0;
    height: 68vh;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
  @media (max-width: 600px) {
    height: 80vh;
    padding-top: 8rem;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
  @media (max-height: 750px) {
    padding: 13rem 0;
    height: 8vh;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
`;
export const StyledAdditionalContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  @media (max-width: 1400px) {
    text-align: center;
  }
`;
export const StyledAdditionalButtonContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  @media (max-width: 1400px) {
    margin-top: 3rem;
  }
`;
export const StyledInfoContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #d7e5e2;
  flex-direction: column;
  height: 60vh;
  padding: 2rem 0;
  @media (min-width: 801px) {
    height: 20vh;
    padding: 1rem 0;
  }
  @media (min-width: 1401px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 0;
    height: 28vh;
  }
  @media (max-height: 670px) {
    padding: 10rem 0;
    height: 30vh;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const StyledTitleTypography = styled(Typography)`
  margin-top: 0.8rem;
  color: white;
  font-size: 80px;
  @media (max-width: 600px) {
    font-size: 60px;
    margin: 0 1rem;
  }
  @media (max-width: 350px) {
    font-size: 40px;
  }
`;
export const StyledSubtitleTypography = styled(Typography)`
  color: white;
  margin-top: 0.2rem;
  font-size: 20px;
  @media (max-width: 600px) {
    font-size: 15px;
    margin: 0 1rem;
  }
`;
export const StyledBox = styled(Box)`
  margin-top: 2rem;
`;

export const StyledBoxContainer = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media (min-width: 801px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 2rem;
  }
  @media (min-width: 1401px) {
    width: unset;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 0;
  }
`;

export const StyledInfoTypography = styled(Typography)`
  background-color: #f2f6f5;
  padding: 10px;
  font-size: 18px;
  border-radius: 5px;
  margin: 0 1rem;
  text-align: center;
  @media (max-width: 800px) {
    margin-top: 2rem;
    width: 12rem;
    text-align: center;
  }
`;
export const StyledInfoTitleTypography = styled(Typography)`
  border-bottom: 5px solid #ff8149;
  padding: 5px 0;
  text-align: center;
  @media (max-width: 300px) {
    font-size: 17px;
  }
`;

export const StyledButtonContainer = styled(Box)`
  background-color: white;
  width: 25rem;
  height: 13rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  @media (max-width: 600px) {
    width: 17rem;
    height: 13rem;
  }
  @media (max-width: 300px) {
    width: 15rem;
    height: 11rem;
  }
`;

export const StyledRegisterButton = styled(Button)`
  background-color: #ff8149;
  padding: 10px;
  color: white;
  width: 13rem;
  padding: 12px;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0px 5px 13px -3px rgba(34, 60, 80, 0.41);
  margin-top: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;

  :hover {
    background-color: #ff793a;
    box-shadow: 0px 5px 13px -3px rgba(34, 60, 80, 0.64);
  }

  @media (max-width: 600px) {
    width: 11rem;
  }
  @media (max-width: 300px) {
    width: 10rem;
  }
`;

export const StyledTypographyGetStarted = styled(Typography)`
  font-size: 30px;
  font-weight: lighter;
  @media (max-width: 600px) {
    font-size: 25px;
  }
  @media (max-width: 350px) {
    font-size: 23px;
  }
`;

export const StyledContentContainer = styled(Container)`
  padding: 64px 30px 40px;
  min-height: 86vh;
  @media (max-width: 1320px) {
    padding-left: 103px;
  }
  @media (max-width: 600px) {
    padding-left: 87px;
  }
`;

export const StyledPageTitleContainer = styled(Box)`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 3rem;
`;

export const StyledPageTitle = styled(Typography)`
  display: inline-block;
  border-bottom: 3px solid #ff8149;
  font-size: 40px;
  text-align: center;
  @media (max-width: 800px) {
    font-size: 2rem;
  }
  @media (max-width: 500px) {
    font-size: 1.8rem;
  }
  @media (max-width: 400px) {
    font-size: 1.4rem;
  }
`;

export const StyledOutlineButton = styled(Button)`
  width: 15rem;
  height: 3rem;
  border-color: #ff8149;
  color: #ff8149;
  line-height: 1.2rem;

  :hover {
    border-color: #ff8149;
    background-color: #ff8149;
    color: white;
  }
`;

export const StyledContainedButton = styled(Button)`
  width: 15rem;
  height: 3rem;
  background-color: #ff8149;
  color: white;

  :hover {
    background-color: #ff793a;
  }
`;

export const StyledInfoBlock = styled.div`
  margin-top: 10px;
  min-height: 47px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > *:not(:first-child) {
    margin-top: 5px;
  }
`;

export const StyledServicesGroup = styled.div`
  margin-top: 20px;
  min-height: 47px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > *:not(:first-child) {
    margin-top: 5px;
  }
`;

export const StyledModalInfoBlock = styled.div`
  width: 100%;
  margin-bottom: 15px;
  & > *:not(:first-child) {
    margin-top: 5px;
  }
`;

export const StyledLinearProgress = styled(LinearProgress)`
  margin: 1rem 0;
`;

export const StyledErrorAlert = styled(Alert)`
  margin: 1rem 0;
`;

export const LoaderBox = styled(Box)`
  margin-bottom: 15px;
  height: 4px;
  width: 100%;
`;

export const SortingBox = styled(Box)`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

export const StyledPagination = styled(Pagination)`
  margin: 3rem 0 2rem;
  display: flex;
  justify-content: center;
`;

export const StyledErrorMessage = styled(Typography)`
  color: #d32f2f;
`;

export const StyledProfileForm = styled.div`
  width: 100%;
  max-width: 500px;
`;
