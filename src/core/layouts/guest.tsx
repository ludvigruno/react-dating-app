import { Container, Grid } from '@mui/material';
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { isEmpty } from 'lodash';
import { getCurrentUser } from '../actions/actions';
import { IAny } from '../intefaces';
import GuestAppBar from './guest-related/guest-app-bar';
import { getCurrentUserSelector } from '../selectors';
import { StyledContainer, StyledGrid } from './styles';

const GuestLayout = memo(({ children }: IAny) => {
  const currentUser = useSelector(getCurrentUserSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isEmpty(currentUser)) {
      dispatch(getCurrentUser());
    }
  }, [dispatch]);
  return (
    <Grid
      container
      sx={{ overflowX: 'hidden', position: 'relative', minHeight: '101vh' }}
    >
      <Grid item xs={12}>
        <Container maxWidth={false}>
          <GuestAppBar />
        </Container>
      </Grid>
      <StyledGrid item xs={12}>
        <StyledContainer>
          <Outlet />
          {children}
        </StyledContainer>
      </StyledGrid>
    </Grid>
  );
});

export default GuestLayout;
