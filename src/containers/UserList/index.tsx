import FilterListIcon from '@mui/icons-material/FilterList';
import React, { memo, useEffect, VFC, useState, EffectCallback } from 'react';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
  SortingBox,
  StyledContentContainer,
  StyledPageTitle,
  StyledPageTitleContainer,
  StyledPagination,
} from '../../core/layouts/styles';
import { clearUserList, getUserList } from './actions/actions';
import UserListItem from './components/UserListItem';
import { getUserListSelector } from './selectors';
import { IUserListItem, UserListItemProps } from './interfaces';

const UserList = memo(() => {
  const userList = useSelector(getUserListSelector);
  const dispatch = useDispatch();
  const { t } = useTranslation(['common', 'registerPage']);

  useEffect(() => {
    dispatch(getUserList({}));
  }, []);

  useEffect(
    (): ReturnType<EffectCallback> => (): void => {
      dispatch(clearUserList());
    },
    [],
  );

  return (
    <StyledContentContainer maxWidth='lg'>
      <StyledPageTitleContainer>
        <StyledPageTitle>{t('pageTitles.userList')}</StyledPageTitle>
      </StyledPageTitleContainer>
      {userList.users.length && (
        <>
          <Grid container spacing={4}>
            {userList.users?.map((user: UserListItemProps) => (
              <UserListItem key={user.user.id} user={user.user} />
            ))}
          </Grid>
        </>
      )}
    </StyledContentContainer>
  );
});

export default UserList;
