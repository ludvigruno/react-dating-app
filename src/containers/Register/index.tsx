import React, { memo, VFC } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { joiResolver } from '@hookform/resolvers/joi';
import { useTranslation } from 'react-i18next';
import { fetchRegisterRequest } from './actions/actions';
import { IUser } from './interfaces';
import {
  StyledTitleTypography,
  StyledSubtitleTypography,
  StyledForm,
  StyledLink,
  StyledContainer,
  InputsContainer,
} from './styles';
import { isEmpty } from '../../utils/helpers';
import { registerSchema } from '../../utils/schema';
import { APP_ROUTES } from '../../core/appRoutes';
import { CustomButton } from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';

const Register = memo(() => {
  const dispatch = useDispatch();
  const { t } = useTranslation(['common', 'registerPage']);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IUser>({
    mode: 'onBlur',
    // resolver: joiResolver(registerSchema),
  });
  const onSubmit = (user: IUser) => {
    const data = {
      ...user,
    };
    dispatch(fetchRegisterRequest({ user: data }));
  };

  return (
    <StyledContainer maxWidth='md'>
      <StyledTitleTypography variant='h4'>Регистрация</StyledTitleTypography>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <InputsContainer>
          <CustomInput
            id='name'
            name='name'
            label={t('common:form.label.name')}
            error={errors.name}
            onChange={(val: string) => {
              setValue('name', val);
            }}
            onBlur={register('name').onBlur}
          />
          <CustomInput
            id='surname'
            name='surname'
            label={t('common:form.label.surname')}
            error={errors.surname}
            onChange={(val: string) => {
              setValue('surname', val);
            }}
            onBlur={register('surname').onBlur}
          />
          <CustomInput
            id='username'
            name='username'
            label={t('common:form.label.username')}
            error={errors.username}
            onChange={(val: string) => {
              setValue('username', val);
            }}
            onBlur={register('username').onBlur}
          />
          <CustomInput
            id='email'
            name='email'
            label={t('common:form.label.email')}
            error={errors.email}
            onChange={(val: string) => {
              setValue('email', val);
            }}
            onBlur={register('email').onBlur}
          />
          <CustomInput
            id='avatar'
            name='avatar'
            label={t('common:form.label.avatar')}
            error={errors.avatar}
            onChange={(val: string) => {
              setValue('avatar', val);
            }}
            onBlur={register('avatar').onBlur}
          />
          <CustomInput
            id='age'
            name='age'
            label={t('common:form.label.age')}
            error={errors.age}
            onChange={(val: string) => {
              setValue('age', val);
            }}
            onBlur={register('age').onBlur}
          />
        </InputsContainer>
        <InputsContainer>
          <CustomInput
            id='password'
            type='password'
            name='password'
            label={t('common:form.label.password')}
            error={errors.password}
            onChange={(val: string) => {
              setValue('password', val);
            }}
            onBlur={register('password').onBlur}
          />
          <CustomInput
            id='confirmPassword'
            name='confirmPassword'
            type='password'
            label={t('common:form.label.confirmPassword')}
            error={errors.confirmPassword}
            onChange={(val: string) => {
              setValue('confirmPassword', val);
            }}
            onBlur={register('confirmPassword').onBlur}
          />
          <CustomButton
            size='large'
            variant='contained'
            type='submit'
            title={t('common:form.button.submit')}
            disabled={isEmpty(errors)}
          />
        </InputsContainer>
      </StyledForm>
      <StyledSubtitleTypography variant='subtitle1'>
        {t('registerPage:links.loginMessage')}
        <StyledLink to={APP_ROUTES.LOGIN}>
          {t('registerPage:links.login')}
        </StyledLink>
      </StyledSubtitleTypography>
    </StyledContainer>
  );
});

export default Register;
