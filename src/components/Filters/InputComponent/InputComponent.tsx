import { forwardRef, useRef, useCallback, useImperativeHandle } from 'react';

type InputComponentProps = {
  label: string;
};

type InputRef = {
  getValue: () => void;
  setValue: (value: string) => void;
  clearValue: () => void;
};

export const InputComponent = forwardRef<InputRef, InputComponentProps>(
  ({ label }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const getValue = useCallback(() => {
      if (inputRef.current) {
        inputRef.current.value;
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
      <div>
        <span>{label}</span>
        <input ref={inputRef} />
      </div>
    );
  }
);

InputComponent.displayName = 'InputComponent';
