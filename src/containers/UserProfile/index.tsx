import React, { memo, useEffect, VFC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  StyledContentContainer,
  StyledPageTitle,
  StyledPageTitleContainer,
} from '../../core/layouts/styles';
import { useProductServices } from './hooks/useUserProfile';
import { getCurrentUserSelector } from '../../core/selectors';
import { getUserProfileSelector } from './selectors';
import { clearUserProfile, fetchUserProfileRequest } from './actions/actions';

const UserProfile = memo(() => {
  const dispatch = useDispatch();
  const [t, params, dispatchCustom, redirectToCatalog] = useProductServices();
  const profileUser = useSelector(getUserProfileSelector);
  const currentUser = useSelector(getCurrentUserSelector);
  const paramss = useParams();

  useEffect(() => {
    if (currentUser?.id) {
      dispatch(fetchUserProfileRequest({ userId: currentUser.id }));
    }

    return () => {
      dispatch(clearUserProfile());
    };
  });

  return (
    <StyledContentContainer maxWidth='lg'>
      <StyledPageTitleContainer>
        <StyledPageTitle>{currentUser?.name}</StyledPageTitle>
      </StyledPageTitleContainer>
    </StyledContentContainer>
  );
});
export default UserProfile;
