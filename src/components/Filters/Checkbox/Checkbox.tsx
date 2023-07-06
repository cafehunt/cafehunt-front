import {
  FC,
  forwardRef,
  useRef,
  useCallback,
  useImperativeHandle,
} from 'react';
import {
  CustomCheckboxStyled,
  CustomCheckboxInput,
  CustomCheckboxLabel,
} from './Checkbox.styled';

type Props = {
  label: string;
  name: string;
};

type InputRef = {
  getValue: () => void;
  setValue: (value: boolean) => void;
  clearValue: () => void;
};

export const CustomCheckbox = forwardRef<InputRef, Props>(
  ({ label, name }, ref) => {
    const checkboxRef = useRef<HTMLInputElement>(null);

    const getValue = useCallback(() => {
      if (checkboxRef.current) {
        return checkboxRef.current.checked;
      }
    }, []);

    const setValue = useCallback((value: boolean) => {
      if (checkboxRef.current) {
        checkboxRef.current.checked = value;
      }
    }, []);

    const clearValue = useCallback(() => {
      if (checkboxRef.current) {
        checkboxRef.current.checked = false;
      }
    }, []);

    useImperativeHandle(ref, () => ({ getValue, setValue, clearValue }), []);

    return (
      <CustomCheckboxStyled>
        <CustomCheckboxInput ref={checkboxRef} type="checkbox" name={name} />
        <CustomCheckboxLabel>{label}</CustomCheckboxLabel>
      </CustomCheckboxStyled>
    );
  }
);

CustomCheckbox.displayName = 'CustomCheckbox';
