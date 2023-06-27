import { FC } from 'react';
import { CustomSelect, Option } from './CustomSelect';
import { Input } from './Input';
import { BasicRating } from './Rating';
import { Button } from '../Button';
import { Checkbox } from './Checkbox';
import {
  Border,
  ButtonContainer,
  CheckBoxContainer,
  FilterContainer,
  FiltersItem,
  ItemsWrapper,
  StyledLink,
  StyledTitle,
} from './Filters.styled';

export const options: Option[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export const Filters: FC = () => {
  const handleCheckboxChange = (newValue: boolean) => {
    console.log('Checkbox value:', newValue);
  };

  return (
    <FilterContainer>
      <ItemsWrapper>
        <FiltersItem>Filters</FiltersItem>
        <StyledLink href="#">Clear all</StyledLink>
      </ItemsWrapper>
      <Border />
      <StyledTitle>Location</StyledTitle>
      <CustomSelect
        options={options}
        label="Choose location"
        placeholder="Choose city"
      />
      <Border />
      <StyledTitle>Search</StyledTitle>
      <Input label="Search cafe" placeholder="The Cake" />
      <Border />
      <StyledTitle>Rating</StyledTitle>
      <BasicRating />
      <Border />
      <StyledTitle>Price</StyledTitle>
      <ButtonContainer>
        <Button variant="secondary" vp="4px" hp="16px">
          $
        </Button>
        <Button variant="secondary" vp="4px" hp="16px">
          $$
        </Button>
        <Button variant="secondary" vp="4px" hp="16px">
          $$$
        </Button>
      </ButtonContainer>
      <Border />
      <StyledTitle>Other</StyledTitle>
      <CheckBoxContainer>
        <Checkbox
          label="Vegan menu"
          checked={false}
          onChange={handleCheckboxChange}
        />
        <Checkbox
          label="Free WI-FI"
          checked={false}
          onChange={handleCheckboxChange}
        />
        <Checkbox
          label="Coworking place"
          checked={false}
          onChange={handleCheckboxChange}
        />
        <Checkbox
          label="Terrace"
          checked={false}
          onChange={handleCheckboxChange}
        />
        <Checkbox
          label="Pet friendly"
          checked={false}
          onChange={handleCheckboxChange}
        />
      </CheckBoxContainer>
      <Button variant="primary">Apply</Button>
    </FilterContainer>
  );
};
