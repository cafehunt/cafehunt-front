import { FC, useState, ChangeEvent, useEffect } from 'react';
import { Controller, UseFormRegisterReturn } from 'react-hook-form';
import {
  IconContainer,
  InputContainer,
  InputStyled,
  StyledError,
} from './Input.styled';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

type Props = {
  type: string;
  label?: string;
  name: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  errors?: Record<string, any>;
  disabled?: boolean;
  controled?: boolean;
  userName?: string;
  handleInputChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

type ErrorRecord = Record<string, { message: string }>;

export const Input: FC<Props> = ({
  type = 'text',
  label,
  name,
  placeholder = '',
  register,
  errors,
  disabled = false,
  userName,
  handleInputChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const hasError = Boolean(errors?.[name]);

  return (
    <InputStyled>
      {label ? <span>{label}</span> : null}
      <InputContainer hasError={hasError}>
        <input
          type={type && !showPassword ? type : 'text'}
          name={name}
          placeholder={placeholder}
          autoComplete={name}
          {...register}
          disabled={disabled}
          min="1"
        />
        {type === 'password' && (
          <IconContainer onClick={handleTogglePassword}>
            {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </IconContainer>
        )}
      </InputContainer>
      {hasError && (
        <StyledError>{(errors as ErrorRecord)[name]?.message}</StyledError>
      )}
    </InputStyled>
  );
};
