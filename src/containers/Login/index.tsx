import React, { memo } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ILogin } from './interfaces';
import {
  StyledContainer,
  StyledForm,
  StyledTitleTypography,
  StyledSubtitleTypography,
  StyledLink,
  InputsContainer,
} from './styles';
import { fetchLoginRequest } from './actions/actions';
import { isEmpty } from '../../utils/helpers';
import { baseLoginSchema } from '../../utils/schema';
import { APP_ROUTES } from '../../core/appRoutes';
import { CustomButton } from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';

const Login = memo(() => {
  const dispatch = useDispatch();
  const { t } = useTranslation(['common', 'loginPage']);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ILogin>({
    mode: 'onBlur',
    // resolver: joiResolver(baseLoginSchema),
  });
  const onSubmit = (data: ILogin) => {
    dispatch(fetchLoginRequest(data));
  };
  return (
    <StyledContainer maxWidth='md'>
      <StyledTitleTypography variant='h4'>
        {t('loginPage:title')}
      </StyledTitleTypography>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <InputsContainer>
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
            id='password'
            name='password'
            type='password'
            label={t('common:form.label.password')}
            error={errors.password}
            onChange={(val: string) => {
              setValue('password', val);
            }}
            onBlur={register('password').onBlur}
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
        {t('loginPage:links.registerMessage')}
        <StyledLink to={APP_ROUTES.REGISTER}>
          {t('loginPage:links.register')}
        </StyledLink>
      </StyledSubtitleTypography>
    </StyledContainer>
  );
});

export default Login;
