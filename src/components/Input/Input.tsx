import { FC, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import {
  IconContainer,
  InputContainer,
  InputStyled,
  StyledError,
} from './Input.styled';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

type Props = {
  type: string;
  label: string;
  name: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  errors?: Record<string, any>;
  disabled?: boolean;
};

type ErrorRecord = Record<string, { message: string }>;

export const Input: FC<Props> = ({
  type,
  label,
  name,
  placeholder = '',
  register,
  errors,
  disabled = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  // console.log('Errors:', errors);

  const hasError = Boolean(errors?.[name]);

  return (
    <InputStyled>
      <span>{label}</span>
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
