import { FC, useState, FormEvent, useRef } from 'react';

import { CustomSelect } from './CustomSelect';
import { Input } from './Input';
import { BasicRating } from './Rating';
import { Button } from '../Button';
import { Checkbox } from './Checkbox';
import {
  Border,
  CheckBoxContainer,
  FilterContainer,
  FiltersItem,
  ItemsWrapper,
  ClearButton,
  StyledTitle,
} from './Filters.styled';
import { useCitiesList } from '../../hooks/useCitiesList';
import { Select2 } from './Select2';
import { FiltersType } from '../../types/Filters.type';
import { RadioGroup } from './RadioGroup';
import { InputComponent } from './InputComponent';

type Props = {
  onFiltersChange: (newFilters: FiltersType) => void;
};

type InputRef = {
  getValue: () => string;
  setValue: (value: string) => void;
  clearValue: () => void;
};

export const Filters: FC<Props> = ({ onFiltersChange }) => {
  const [data, status] = useCitiesList();

  const nameInputRef = useRef<InputRef | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const newData: FiltersType = {
      city: Number(formData.get('city')),
      name: (String(formData.get('name')) ?? '').trim(),
      rating: Number(formData.get('rating')),
      averageBill: String(formData.get('average-bill') ?? ''),
      hasWiFi: Boolean(formData.get('wifi')),
      hasCoworking: Boolean(formData.get('coworking')),
      petsAllowed: Boolean(formData.get('pets')),
      hasTerrace: Boolean(formData.get('terrace')),
      hasVegan: Boolean(formData.get('vegan')),
    };

    onFiltersChange(newData);
  };

  const handleClear = () => {
    nameInputRef.current?.clearValue();
  };

  if (status === 'success') {
    return (
      <FilterContainer onSubmit={handleSubmit}>
        <ItemsWrapper>
          <FiltersItem>Filters</FiltersItem>
          <ClearButton onClick={handleClear}>Clear all</ClearButton>
        </ItemsWrapper>
        <Border />
        <StyledTitle>Location</StyledTitle>
        {/* <CustomSelect
          options={data}
          label="Choose location"
          placeholder="Choose city"
        /> */}
        <Select2
          name="city"
          label="Choose location"
          placeholder="Choose city"
          options={data}
        />
        <Border />
        <InputComponent label="Input with ref" ref={nameInputRef} />
        <StyledTitle>Search</StyledTitle>
        <Input name="name" label="Search cafe" placeholder="The Cake" />
        <Border />
        <StyledTitle>Rating</StyledTitle>
        <BasicRating name="rating" />
        <Border />
        <RadioGroup title="Price" name="average-bill" />
        <Border />
        <StyledTitle>Other</StyledTitle>
        <CheckBoxContainer>
          <Checkbox label="Vegan menu" name="vegan" checked={false} />
          <Checkbox label="Free WI-FI" name="wifi" checked={false} />
          <Checkbox label="Coworking place" name="coworking" checked={false} />
          <Checkbox label="Terrace" name="terrace" checked={false} />
          <Checkbox label="Pet friendly" name="pets" checked={false} />
        </CheckBoxContainer>
        <Button type="submit">Apply</Button>
      </FilterContainer>
    );
  }
};
