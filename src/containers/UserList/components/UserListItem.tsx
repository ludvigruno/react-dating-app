import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { CardMedia, Grid } from '@mui/material';
import { useNavigate } from 'react-router';
import { CustomButton } from '../../../components/CustomButton';
import { APP_ROUTES } from '../../../core/appRoutes';
import { truncateString } from '../../../utils/helpers';
import {
  StyledTermsGroup,
  StyledTermsItem,
  StyledCardActions,
  StyledCardTitle,
  StyledTermsTitle,
  StyledCardContentGroup,
  StyledCard,
  StyledCardContent,
} from '../styles';
import { UserListItemProps } from '../interfaces';

const UserListItem = memo(({ user }: UserListItemProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation(['common', 'registerPage']);
  const { id, name, surname, username, email, avatar, age } = user;

  const redirectToUserDetail = () => {
    navigate(APP_ROUTES.PROFILE_USER);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <StyledCard>
        <CardMedia component='img' height='180' image={avatar} alt='avatar' />
        <StyledCardContent>
          <StyledCardContentGroup>
            <StyledCardTitle gutterBottom variant='h2'>
              {truncateString(name, 70)}
            </StyledCardTitle>
          </StyledCardContentGroup>
          <StyledTermsGroup>
            <StyledTermsItem>
              <StyledTermsTitle>
                {t('common:card.user.surname')}: {surname}
              </StyledTermsTitle>
              <StyledTermsTitle>
                {t('common:card.user.username')}: {username}
              </StyledTermsTitle>
              <StyledTermsTitle>
                {t('common:card.user.email')}: {email}
              </StyledTermsTitle>
              {t('common:card.user.age')}: {age}
            </StyledTermsItem>
          </StyledTermsGroup>
        </StyledCardContent>
        <StyledCardActions>
          <CustomButton
            size='large'
            variant='contained'
            onClick={redirectToUserDetail}
            title={t('common:card.links.viewMore')}
          />
        </StyledCardActions>
      </StyledCard>
    </Grid>
  );
});

export default UserListItem;
