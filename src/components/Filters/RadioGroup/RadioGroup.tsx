import { forwardRef, useRef, useCallback, useImperativeHandle } from 'react';
import {
  RadioButton,
  RadioGroupStyled,
  RadioGroupTitle,
  RadioGroupWrapper,
  RadioOption,
} from './RadioGroup.styled';

type Props = {
  title: string;
  name: string;
};

type InputRef = {
  getValue: () => void;
  setValue: (value: string) => void;
  clearValue: () => void;
};

export const RadioGroup = forwardRef<InputRef, Props>(
  ({ title, name }, ref) => {
    const cheapRef = useRef<HTMLInputElement>(null);
    const middleRef = useRef<HTMLInputElement>(null);
    const expensiveRef = useRef<HTMLInputElement>(null);

    const getValue = useCallback(() => {
      if (cheapRef.current?.checked) {
        return 'cheap';
      } else if (middleRef.current?.checked) {
        return 'middle';
      } else if (expensiveRef.current?.checked) {
        return 'expensive';
      }
    }, []);

    const setValue = useCallback((value: string) => {
      if (cheapRef.current && middleRef.current && expensiveRef.current) {
        cheapRef.current.checked = value === 'cheap';
        middleRef.current.checked = value === 'middle';
        expensiveRef.current.checked = value === 'expensive';
      }
    }, []);

    const clearValue = useCallback(() => {
      if (cheapRef.current && middleRef.current && expensiveRef.current) {
        cheapRef.current.checked = false;
        middleRef.current.checked = false;
        expensiveRef.current.checked = false;
      }
    }, []);

    useImperativeHandle(ref, () => ({ getValue, setValue, clearValue }), []);

    return (
      <RadioGroupStyled>
        <RadioGroupTitle>{title}</RadioGroupTitle>
        <RadioGroupWrapper>
          <RadioButton
            id="average-bill-1"
            name={name}
            type="radio"
            value="cheap"
            ref={cheapRef}
          />
          <RadioOption htmlFor="average-bill-1">
            <span>$</span>
          </RadioOption>
          <RadioButton
            id="average-bill-2"
            name={name}
            type="radio"
            value="middle"
            ref={middleRef}
          />
          <RadioOption htmlFor="average-bill-2">
            <span>$$</span>
          </RadioOption>
          <RadioButton
            id="average-bill-3"
            name={name}
            type="radio"
            value="expensive"
            ref={expensiveRef}
          />
          <RadioOption htmlFor="average-bill-3">
            <span>$$$</span>
          </RadioOption>
        </RadioGroupWrapper>
      </RadioGroupStyled>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';
