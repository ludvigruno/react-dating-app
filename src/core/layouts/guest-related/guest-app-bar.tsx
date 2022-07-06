import * as React from 'react';
import Container from '@mui/material/Container';
import { memo } from 'react';
import { Toolbar } from '@mui/material';
import { useTranslation } from 'react-i18next';
import {
  AppBarTypography,
  StyledAppBar,
  StyledNavLink,
  StyledRegisterLink,
  StyledLoginLink,
} from './styles';
import { APP_ROUTES } from '../../appRoutes';

const GuestAppBar = memo(() => {
  const { t } = useTranslation('common');
  return (
    <StyledAppBar>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <AppBarTypography variant='h6' noWrap>
            <StyledNavLink to={APP_ROUTES.MAIN}>
              {t('companyName')}
            </StyledNavLink>
          </AppBarTypography>
          <StyledLoginLink to={APP_ROUTES.LOGIN}>
            {t('header.links.login')}
          </StyledLoginLink>
          <StyledRegisterLink to={APP_ROUTES.REGISTER}>
            {t('header.links.register')}
          </StyledRegisterLink>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
});
export default GuestAppBar;
