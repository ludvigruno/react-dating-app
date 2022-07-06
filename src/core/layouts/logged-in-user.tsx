import { Container, Grid } from '@mui/material';
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { isEmpty } from 'lodash';
import { getCurrentUser } from '../actions/actions';
import LoggedInAppBar from './logged-in-related/logged-in-app-bar';
import { StyledContainer, StyledGrid } from './styles';
import { getCurrentUserSelector } from '../selectors';

const LoggedInUserLayout = memo(() => {
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUserSelector);
  useEffect(() => {
    if (isEmpty(currentUser)) {
      dispatch(getCurrentUser());
    }
  }, [currentUser, dispatch]);
  return (
    <Grid
      container
      sx={{ overflowX: 'hidden', position: 'relative', minHeight: '101vh' }}
    >
      {currentUser && (
        <Grid item xs={12}>
          <Container maxWidth={false}>
            <LoggedInAppBar
              avatar={currentUser.avatar}
              name={currentUser.name}
            />
          </Container>
        </Grid>
      )}
      <StyledGrid item xs={12}>
        <StyledContainer maxWidth={false}>
          <Outlet />
        </StyledContainer>
      </StyledGrid>
    </Grid>
  );
});

export default LoggedInUserLayout;
