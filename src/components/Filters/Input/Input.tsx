import { FC } from 'react';
import searchIcon from '../../../assets/icons/search.png';
import {
  IconSearch,
  InputContainer,
  StyledInput,
  StyledLabel,
} from './Input.styled';

export type Props = {
  name: string;
  label: string;
  placeholder: string;
};

export const Input: FC<Props> = ({ name, label, placeholder }) => {
  return (
    <InputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput name={name} type="text" placeholder={placeholder} />
      <IconSearch src={searchIcon} />
    </InputContainer>
  );
};
