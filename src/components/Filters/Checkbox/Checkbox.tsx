import {
  FC,
  useState,
  ChangeEvent,
  forwardRef,
  useRef,
  useCallback,
  useImperativeHandle,
} from 'react';
import { TbCheck } from 'react-icons/tb';
import {
  CheckboxContainer,
  CheckboxCustom,
  CheckboxInput,
  CheckboxLabel,
} from './Checkbox.styled';

type Props = {
  label: string;
  checked: boolean;
  name: string;
};

type InputRef = {
  getValue: () => void;
  setValue: (value: boolean) => void;
  clearValue: () => void;
};

export const Checkbox = forwardRef<InputRef, Props>(
  ({ label, name, checked }, ref) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.checked;
      setIsChecked(newValue);
    };

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
      <CheckboxContainer>
        <CheckboxInput
          type="checkbox"
          name={name}
          ref={checkboxRef}
          checked={checked}
          onChange={handleChange}
        />
        <CheckboxCustom checked={checked}>
          {isChecked && <TbCheck size={24} color="white" />}
        </CheckboxCustom>
        <CheckboxLabel>{label}</CheckboxLabel>
      </CheckboxContainer>
    );
  }
);

Checkbox.displayName = 'Checkbox';
