import { ButtonProps } from '@mui/material';
import React, { memo } from 'react';
import { StyledButton } from './style';

interface ISubmitButtonProps extends ButtonProps<any, any> {
  isLoading?: boolean;
  disabled?: boolean;
  title: JSX.Element | string;
}

export const CustomButton = memo(
  ({ isLoading, disabled, title, ...anyProps }: ISubmitButtonProps) => {
    return (
      <StyledButton disabled={disabled} {...anyProps}>
        {title}
      </StyledButton>
    );
  },
);
