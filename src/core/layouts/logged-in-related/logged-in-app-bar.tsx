import React, { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { setUserLogout } from '../../actions/actions';
import {
  StyledAppBar,
  StyledIconButton,
  StyledBoxMenu,
  StyledTitleTypography,
  StyledMenuContainer,
  StyledToolbar,
  StyledLink,
  StyledTypography,
} from './styles';
import { userNavBar, baseSettings } from '../menu';
import { getCurrentUserSelector } from '../../selectors';
import { APP_ROUTES } from '../../appRoutes';

interface ILoggedInAppBarProps {
  name: string;
  avatar: string;
}

const LoggedInAppBar = memo(({ name, avatar }: ILoggedInAppBarProps) => {
  const currentUser = useSelector(getCurrentUserSelector);
  const { t } = useTranslation(['common', 'registerPage']);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(setUserLogout());
  };

  const redirectToUserDetail = () => {
    navigate(APP_ROUTES.PROFILE_USER);
  };

  return (
    <StyledAppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Container maxWidth='xl'>
        <StyledToolbar disableGutters>
          <StyledTitleTypography variant='h6' noWrap>
            <StyledLink to={APP_ROUTES.USERLIST}>Peoples</StyledLink>
            <StyledLink to={APP_ROUTES.DASHBOARD}>Dashboard</StyledLink>
          </StyledTitleTypography>
          <StyledMenuContainer>
            <StyledBoxMenu>
              {currentUser?.name}
              <Tooltip title={t('user.profile')}>
                <StyledIconButton onClick={redirectToUserDetail}>
                  <Avatar alt='Hop Hey Lalaley' src={avatar} />
                </StyledIconButton>
              </Tooltip>
            </StyledBoxMenu>
            <StyledTypography onClick={logout}>выход</StyledTypography>
          </StyledMenuContainer>
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
});
export default LoggedInAppBar;
