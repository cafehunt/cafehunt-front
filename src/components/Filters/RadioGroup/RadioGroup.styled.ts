import styled from 'styled-components';
import { COLORS, FONT_SIZES, FONT_WEIGHTS, LINE_HEIGHTS } from '../../../theme';

export const RadioGroupStyled = styled.div`
  width: 100%;
  margin-bottom: 26px;
`;

export const RadioGroupTitle = styled.h3`
  margin-bottom: 16px;

  font-size: ${FONT_SIZES.s18};
  font-weight: ${FONT_WEIGHTS.medium};
  line-height: ${LINE_HEIGHTS.h140};
  color: ${COLORS.black};
`;

export const RadioGroupWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const RadioOption = styled.label`
  padding: 4px 16px;

  color: ${COLORS.main};

  border: 1px solid ${COLORS.main};
  border-radius: 8px;

  transition: 0.3s background-color ease;

  cursor: pointer;

  &:hover {
    background-color: ${COLORS.secondary_color};
  }
`;

export const RadioButton = styled.input`
  /* position: relative;
  margin: 0;

  appearance: none; */
  display: none;

  &:checked + label {
    background-color: ${COLORS.secondary_color};
  }
`;
