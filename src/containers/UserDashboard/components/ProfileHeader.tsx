import React from 'react';
import { useSelector } from 'react-redux';
import { CardMedia } from '@mui/material';
import { getCurrentUserSelector } from '../../../core/selectors';

import {
  StyledContainer,
  StyledIconContainer,
  StyledProfileData,
  StyledTypography,
} from '../styles/header';

function ProfileHeader() {
  const currentUser = useSelector(getCurrentUserSelector);

  return (
    <StyledContainer maxWidth='lg'>
      <CardMedia
        component='img'
        height='180'
        image={currentUser?.avatar}
        alt='avatar'
      />
      <StyledIconContainer>{currentUser?.name}</StyledIconContainer>
      <StyledProfileData>
        <StyledTypography variant='h5'>{currentUser?.email}</StyledTypography>
      </StyledProfileData>
    </StyledContainer>
  );
}

export default ProfileHeader;
