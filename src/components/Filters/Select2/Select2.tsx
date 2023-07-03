import { FC, useState, ChangeEvent } from 'react';
import {
  Select2Label,
  Select2Styled,
  Select2Wrapper,
  Select2Container,
  Select2Option,
} from './Select2.styled';
import { City } from '../../../types/City.type';

type Props = {
  name: string;
  label: string;
  placeholder: string;
  options: City[];
};

export const Select2: FC<Props> = ({ name, label, placeholder, options }) => {
  const [selectedOption, setSelectedOption] = useState(0);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(+event.target.value);
  };

  return (
    <Select2Styled>
      <Select2Label>{label}</Select2Label>
      <Select2Container>
        <Select2Wrapper
          name={name}
          value={selectedOption}
          onChange={handleChange}
        >
          <Select2Option value="0" disabled>
            {placeholder}
          </Select2Option>
          {options.map(({ id, name }) => (
            <Select2Option key={id} value={id}>
              {name}
            </Select2Option>
          ))}
        </Select2Wrapper>
      </Select2Container>
    </Select2Styled>
  );
};
