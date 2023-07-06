import { forwardRef, useRef, useCallback, useImperativeHandle } from 'react';
import searchIcon from '../../../assets/icons/search.png';
import {
  IconSearch,
  InputContainer,
  StyledInput,
  StyledLabel,
} from './Input.styled';

type Props = {
  name: string;
  label: string;
  placeholder: string;
};

type InputRef = {
  getValue: () => void;
  setValue: (value: string) => void;
  clearValue: () => void;
};

export const Input = forwardRef<InputRef, Props>(
  ({ name, label, placeholder }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const getValue = useCallback(() => {
      if (inputRef.current) {
        return inputRef.current.value;
      }
    }, []);

    const setValue = useCallback((value: string) => {
      if (inputRef.current) {
        inputRef.current.value = value;
      }
    }, []);

    const clearValue = useCallback(() => {
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    }, []);

    useImperativeHandle(ref, () => ({ getValue, setValue, clearValue }), []);

    return (
      <InputContainer>
        <StyledLabel>{label}</StyledLabel>
        <StyledInput
          ref={inputRef}
          name={name}
          type="text"
          placeholder={placeholder}
        />
        <IconSearch src={searchIcon} />
      </InputContainer>
    );
  }
);

Input.displayName = 'Input';
