import { FC, useState, FormEvent, useRef } from 'react';

import { CustomSelect } from './CustomSelect';
import { Input } from './Input';
import { Button } from '../Button';
import { CustomCheckbox } from './Checkbox';
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
import { RatingList } from './RatingList';
import { City } from '../../types/City.type';

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
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  const nameInputRef = useRef<InputRef | null>(null);
  // const citySelectRef = useRef<selectRef | null>(null);
  const ratingRef = useRef<checkboxRef | null>(null);
  const averageBillRef = useRef<InputRef | null>(null);
  const veganRef = useRef<checkboxRef | null>(null);
  const wifiRef = useRef<checkboxRef | null>(null);
  const coworkingRef = useRef<checkboxRef | null>(null);
  const terraceRef = useRef<checkboxRef | null>(null);
  const petsRef = useRef<checkboxRef | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newData: FiltersType = {
      city: Number(selectedCity?.id),
      name: (nameInputRef.current?.getValue() ?? '').trim(),
      rating: Number(ratingRef.current?.getValue()),
      averageBill: averageBillRef.current?.getValue() || '',
      hasWiFi: Boolean(wifiRef.current?.getValue()),
      hasCoworking: Boolean(coworkingRef.current?.getValue()),
      petsAllowed: Boolean(petsRef.current?.getValue()),
      hasTerrace: Boolean(terraceRef.current?.getValue()),
      hasVegan: Boolean(veganRef.current?.getValue()),
    };

    onFiltersChange(newData);
  };

  const handleClear = () => {
    nameInputRef.current?.clearValue();
    // citySelectRef.current?.clearValue();
    setSelectedCity(null);
    ratingRef.current?.clearValue();
    averageBillRef.current?.clearValue();
    veganRef.current?.clearValue();
    wifiRef.current?.clearValue();
    coworkingRef.current?.clearValue();
    terraceRef.current?.clearValue();
    petsRef.current?.clearValue();

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

  const handleCitySelection = (option: City) => {
    setSelectedCity(option);
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
        <CustomSelect
          options={data}
          selectedCity={selectedCity}
          onCitySelect={handleCitySelection}
          label="Choose location"
          placeholder="Choose city"
        />
        {/* <Select2
          name="city"
          label="Choose location"
          placeholder="Choose city"
          ref={citySelectRef}
          options={data}
        /> */}
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
        {/* <BasicRating name="rating" /> */}
        <RatingList name="rating" ref={ratingRef} />
        <Border />
        <RadioGroup title="Price" name="average-bill" ref={averageBillRef} />
        <Border />
        <StyledTitle>Other</StyledTitle>
        <CheckBoxContainer>
          <CustomCheckbox ref={veganRef} label="Vegan menu" name="vegan" />
          <CustomCheckbox ref={wifiRef} label="Free Wi-Fi" name="wifi" />
          <CustomCheckbox
            ref={coworkingRef}
            label="Coworking place"
            name="coworking"
          />
          <CustomCheckbox ref={terraceRef} label="Terrace" name="terrace" />
          <CustomCheckbox ref={petsRef} label="Pet friendly" name="pets" />
        </CheckBoxContainer>
        <Button type="submit">Apply</Button>
      </FilterContainer>
    );
  }
};
