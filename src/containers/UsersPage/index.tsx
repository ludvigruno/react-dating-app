import React from 'react';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../core/appRoutes';
import {
  StyledAppContainer,
  StyledBox,
  StyledSubtitleTypography,
  StyledTitleContainer,
  StyledTitleTypography,
  StyledAdditionalContainer,
  StyledButtonContainer,
  StyledRegisterButton,
  StyledTypographyGetStarted,
  StyledAdditionalButtonContainer,
} from '../../core/layouts/styles';

const UsersPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(APP_ROUTES.REGISTER);
  };
  return (
    <StyledAppContainer maxWidth={false}>
      <StyledTitleContainer>
        <StyledAdditionalContainer>
          <StyledTitleTypography variant='h2'>People</StyledTitleTypography>
          <StyledBox>
            <StyledSubtitleTypography variant='subtitle1'>
              Ищи друзей
            </StyledSubtitleTypography>
          </StyledBox>
        </StyledAdditionalContainer>
        <StyledAdditionalButtonContainer>
          <StyledButtonContainer>
            <StyledTypographyGetStarted>
              Зарегистрируйся
            </StyledTypographyGetStarted>
            <StyledRegisterButton onClick={handleClick}></StyledRegisterButton>
          </StyledButtonContainer>
        </StyledAdditionalButtonContainer>
      </StyledTitleContainer>
    </StyledAppContainer>
  );
};

export default UsersPage;
