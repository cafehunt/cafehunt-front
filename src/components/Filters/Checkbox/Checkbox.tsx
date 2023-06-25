import { FC, useState, ChangeEvent } from 'react';
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
  onChange: (checked: boolean) => void;
};

export const Checkbox: FC<Props> = ({ label, checked, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.checked;
    setIsChecked(newValue);
    onChange(newValue);
  };

  return (
    <CheckboxContainer>
      <CheckboxInput
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <CheckboxCustom checked={isChecked}>
        {isChecked && <TbCheck size={24} color="white" />}
      </CheckboxCustom>
      <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxContainer>
  );
};
