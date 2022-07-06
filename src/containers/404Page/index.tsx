import React, { memo } from 'react';
import { APP_ROUTES } from '../../core/appRoutes';
import {
  StyledLink,
  StyledContainer,
  StyledTypography,
  StyledSubtitleTypography,
} from './styles';

const NotFoundPage = memo(() => {
  return (
    <StyledContainer>
      <StyledTypography variant='h1'>{'title'}</StyledTypography>
      <StyledSubtitleTypography variant='subtitle1'>
        <StyledLink to={APP_ROUTES.MAIN}>{'links.mainPage'}</StyledLink>
      </StyledSubtitleTypography>
    </StyledContainer>
  );
});

export default NotFoundPage;
