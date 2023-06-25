import { FC, useState } from 'react';
import arrowDown from '../../../assets/icons/arrow-down.png';
import {
  CustomSelectWrapper,
  DropdownIcon,
  Option,
  Options,
  SelectButton,
  StyledLabel,
} from './CustomSelect.styled';

export interface Option {
  value: string;
  label: string;
}

export interface CustomSelectProps {
  options: Option[];
  placeholder: string;
  label: string;
}

export const CustomSelect: FC<CustomSelectProps> = ({
  options,
  placeholder,
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const hasSelection = selectedOption !== null;

  const handleToggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <CustomSelectWrapper>
      <StyledLabel>{label}</StyledLabel>
      <SelectButton onClick={handleToggleOptions} hasSelection={hasSelection}>
        {selectedOption ? selectedOption.label : placeholder}
        <DropdownIcon src={arrowDown} alt="Dropdown" isOpen={isOpen} />
      </SelectButton>
      <Options isOpen={isOpen}>
        {options.map((option) => (
          <Option key={option.value} onClick={() => handleSelectOption(option)}>
            {option.label}
          </Option>
        ))}
      </Options>
    </CustomSelectWrapper>
  );
};
