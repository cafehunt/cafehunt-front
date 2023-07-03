import { FC } from 'react';
import {
  RadioButton,
  RadioGroupStyled,
  RadioGroupTitle,
  RadioGroupWrapper,
  RadioOption,
} from './RadioGroup.styled';

type Props = {
  title: string;
  name: string;
};

export const RadioGroup: FC<Props> = ({ title, name }) => {
  return (
    <RadioGroupStyled>
      <RadioGroupTitle>{title}</RadioGroupTitle>
      <RadioGroupWrapper>
        <RadioButton
          id="average-bill-1"
          name={name}
          type="radio"
          value="cheap"
        />
        <RadioOption htmlFor="average-bill-1">
          <span>$</span>
        </RadioOption>
        <RadioButton
          id="average-bill-2"
          name={name}
          type="radio"
          value="middle"
        />
        <RadioOption htmlFor="average-bill-2">
          <span>$$</span>
        </RadioOption>
        <RadioButton
          id="average-bill-3"
          name={name}
          type="radio"
          value="expensive"
        />
        <RadioOption htmlFor="average-bill-3">
          <span>$$$</span>
        </RadioOption>
      </RadioGroupWrapper>
    </RadioGroupStyled>
  );
};
