import { forwardRef, useRef, useCallback, useImperativeHandle } from 'react';
import {
  Select2Label,
  Select2Styled,
  Select2Wrapper,
  Select2Container,
  Select2Option,
} from './Select2.styled';
import { City } from '../../../types/City.type';

type Props = {
  name: string;
  label: string;
  placeholder: string;
  options: City[];
};

type InputRef = {
  getValue: () => void;
  setValue: (value: number) => void;
  clearValue: () => void;
};

export const Select2 = forwardRef<InputRef, Props>(
  ({ name, label, placeholder, options }, ref) => {
    const selectRef = useRef<HTMLSelectElement>(null);

    const getValue = useCallback(() => {
      if (selectRef.current) {
        return selectRef.current.value;
      }
    }, []);

    const setValue = useCallback((value: number) => {
      if (selectRef.current) {
        selectRef.current.value = String(value);
      }
    }, []);

    const clearValue = useCallback(() => {
      if (selectRef.current) {
        selectRef.current.value = String(0);
      }
    }, []);

    useImperativeHandle(ref, () => ({ getValue, setValue, clearValue }), []);

    return (
      <Select2Styled>
        <Select2Label>{label}</Select2Label>
        <Select2Container>
          <Select2Wrapper defaultValue={0} name={name} ref={selectRef}>
            <Select2Option value={0} disabled>
              {placeholder}
            </Select2Option>
            {options.map(({ id, name }) => (
              <Select2Option key={id} value={id}>
                {name}
              </Select2Option>
            ))}
          </Select2Wrapper>
        </Select2Container>
      </Select2Styled>
    );
  }
);

Select2.displayName = 'Select';
