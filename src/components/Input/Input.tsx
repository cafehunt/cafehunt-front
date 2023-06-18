import { FC, useState } from 'react';
import { IconContainer, InputContainer, InputStyled } from './Input.styled';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

type Props = {
  type: string;
  label: string;
  name: string;
  placeholder?: string;
};

export const Input: FC<Props> = ({ type, label, name, placeholder = '' }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <InputStyled>
      <span>{label}</span>
      <InputContainer>
        <input
          type={type === 'password' && !showPassword ? 'password' : 'text'}
          name={name}
          placeholder={placeholder}
          autoComplete={name}
        />
        {type === 'password' && (
          <IconContainer onClick={handleTogglePassword}>
            {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </IconContainer>
        )}
      </InputContainer>
    </InputStyled>
  );
};
