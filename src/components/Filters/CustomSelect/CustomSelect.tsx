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

type Props = {
  options: City[];
  selectedCity: City | null;
  onCitySelect: (option: City) => void;
  placeholder: string;
  label: string;
};

export const CustomSelect: FC<Props> = ({
  options,
  placeholder,
  label,
  selectedCity,
  onCitySelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasSelection = selectedCity !== null;

  const handleToggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option: City) => {
    onCitySelect(option);
    setIsOpen(false);
  };

  return (
    <CustomSelectWrapper>
      <StyledLabel>{label}</StyledLabel>
      <SelectButton
        type="button"
        onClick={handleToggleOptions}
        hasSelection={hasSelection}
      >
        {selectedCity ? selectedCity.name : placeholder}
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
