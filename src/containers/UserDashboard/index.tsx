import React from 'react';
import ProfileHeader from './components/ProfileHeader';
import { StyledContainer, StyledMainContent } from './styles/index';

function UserDashboard() {
  return (
    <StyledContainer maxWidth={false}>
      <StyledMainContent>
        <ProfileHeader />
      </StyledMainContent>
    </StyledContainer>
  );
}

export default UserDashboard;
