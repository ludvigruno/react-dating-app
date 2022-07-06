import React, { memo, useEffect, useState, VFC } from 'react';
import { IAny } from '../../core/intefaces';
import { StyledInput } from './style';

const CustomInput: VFC<IAny> = memo(
  ({
    disabled,
    label,
    error,
    name,
    id,
    type = 'text',
    ref,
    onChange,
    onBlur,
    initialValue = '',
    placeholder = '',
  }) => {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
      onChange(value);
    }, [value]);

    return (
      <StyledInput
        onChange={(e) => {
          setValue(e.target.value);
        }}
        id={id}
        type={type}
        name={name}
        ref={ref}
        disabled={disabled}
        placeholder={placeholder}
        label={label}
        error={!!error}
        onBlur={onBlur}
        helperText={error?.message && error.message}
      />
    );
  },
);

export default CustomInput;
