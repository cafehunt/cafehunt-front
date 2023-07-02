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
import { City } from '../../../types/City.type';

export interface Option {
  value: string;
  label: string;
}

export interface CustomSelectProps {
  options: City[];
  placeholder: string;
  label: string;
}

export const CustomSelect: FC<CustomSelectProps> = ({
  options,
  placeholder,
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<City | null>(null);
  const hasSelection = selectedOption !== null;

  const handleToggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option: City) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <CustomSelectWrapper>
      <StyledLabel>{label}</StyledLabel>
      <SelectButton onClick={handleToggleOptions} hasSelection={hasSelection}>
        {selectedOption ? selectedOption.name : placeholder}
        <DropdownIcon src={arrowDown} alt="Dropdown" isOpen={isOpen} />
      </SelectButton>
      <Options isOpen={isOpen}>
        {options.map((option) => (
          <Option key={option.id} onClick={() => handleSelectOption(option)}>
            {option.name}
          </Option>
        ))}
      </Options>
    </CustomSelectWrapper>
  );
};
