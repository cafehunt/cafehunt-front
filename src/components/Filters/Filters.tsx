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

type selectRef = {
  getValue: () => string;
  setValue: (value: number) => void;
  clearValue: () => void;
};

type checkboxRef = {
  getValue: () => void;
  setValue: (value: boolean) => void;
  clearValue: () => void;
};

export const Filters: FC<Props> = ({ onFiltersChange }) => {
  const [data, status] = useCitiesList();

  const nameInputRef = useRef<InputRef | null>(null);
  const citySelectRef = useRef<selectRef | null>(null);
  const averageBillRef = useRef<InputRef | null>(null);
  const veganRef = useRef<checkboxRef | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const newData: FiltersType = {
      city: Number(citySelectRef.current?.getValue()),
      name: (nameInputRef.current?.getValue() ?? '').trim(),
      rating: Number(formData.get('rating')),
      averageBill: averageBillRef.current?.getValue() || '',
      hasWiFi: Boolean(formData.get('wifi')),
      hasCoworking: Boolean(formData.get('coworking')),
      petsAllowed: Boolean(formData.get('pets')),
      hasTerrace: Boolean(formData.get('terrace')),
      hasVegan: Boolean(formData.get('vegan')),
    };

    onFiltersChange(newData);
  };

  console.log('Vegan:', veganRef.current?.getValue());

  const handleClear = () => {
    nameInputRef.current?.clearValue();
    citySelectRef.current?.clearValue();
    averageBillRef.current?.clearValue();
    veganRef.current?.clearValue();

    const defaultData: FiltersType = {
      city: 0,
      name: '',
      rating: 0,
      averageBill: '',
      hasWiFi: false,
      hasCoworking: false,
      petsAllowed: false,
      hasTerrace: false,
      hasVegan: false,
    };

    onFiltersChange(defaultData);
  };

  if (status === 'success') {
    return (
      <FilterContainer onSubmit={handleSubmit}>
        <ItemsWrapper>
          <FiltersItem>Filters</FiltersItem>
          <ClearButton type="button" onClick={handleClear}>
            Clear all
          </ClearButton>
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
          ref={citySelectRef}
          options={data}
        />
        <Border />
        {/* <InputComponent label="Input with ref" ref={nameInputRef} /> */}
        <StyledTitle>Search</StyledTitle>
        <Input
          name="name"
          label="Search cafe"
          ref={nameInputRef}
          placeholder="The Cake"
        />
        <Border />
        <StyledTitle>Rating</StyledTitle>
        <BasicRating name="rating" />
        <Border />
        <RadioGroup title="Price" name="average-bill" ref={averageBillRef} />
        <Border />
        <StyledTitle>Other</StyledTitle>
        <CheckBoxContainer>
          <Checkbox
            label="Vegan menu"
            name="vegan"
            ref={veganRef}
            checked={false}
          />
          {/* <Checkbox label="Free WI-FI" name="wifi" />
          <Checkbox label="Coworking place" name="coworking" />
          <Checkbox label="Terrace" name="terrace" />
          <Checkbox label="Pet friendly" name="pets" /> */}
        </CheckBoxContainer>
        <Button type="submit">Apply</Button>
      </FilterContainer>
    );
  }
};
