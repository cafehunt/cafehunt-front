import styled from 'styled-components';
import { COLORS, FONT_SIZES } from '../../../theme';

import selectArrow from '../../../assets/icons/checkbox-arrow.svg';

export const CustomCheckboxStyled = styled.label`
  display: flex;
  gap: 8px;
  align-items: center;

  cursor: pointer;
`;

export const CustomCheckboxLabel = styled.span`
  font-size: ${FONT_SIZES.s18};
`;

export const CustomCheckboxInput = styled.input`
  appearance: none;

  position: relative;

  margin: 0;
  width: 24px;
  height: 24px;

  border: 1px solid ${COLORS.grey};
  border-radius: 4px;

  cursor: pointer;

  &:checked {
    border-color: ${COLORS.main};
    background-color: ${COLORS.main};

    &::after {
      content: url(${selectArrow});
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: block;
      width: 20px;
      height: 20px;
      transition: background-color 0.3s ease;
    }
  }
`;
