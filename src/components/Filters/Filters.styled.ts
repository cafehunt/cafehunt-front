import styled from 'styled-components';
import { COLORS, FONT_SIZES, FONT_WEIGHTS } from '../../theme';

export const FilterContainer = styled.form`
  width: 424px;
  padding: 32px 24px;
  align-self: flex-start;

  border-radius: 24px;
  border: 1px solid ${COLORS.light_grey};
  background-color: ${COLORS.white};
`;

export const FiltersItem = styled.h2`
  font-size: ${FONT_SIZES.s24};
  font-weight: ${FONT_WEIGHTS.medium};
  line-height: 140%;
`;

export const ClearButton = styled.button`
  font-size: ${FONT_SIZES.s16};
  font-weight: ${FONT_WEIGHTS.medium};
  line-height: 140%;
  color: ${COLORS.main};
  text-decoration: none;

  border: none;
  background-color: transparent;
  outline: none;

  cursor: pointer;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26px;
`;

export const Border = styled.div`
  border: 1px solid ${COLORS.light_grey};
  width: 376px;
  margin-bottom: 26px;
`;
export const StyledTitle = styled.h2`
  font-size: 18px;
  font-weight: ${FONT_WEIGHTS.medium};
  line-height: 140%;
  margin-bottom: 16px;
`;

// export const ButtonContainer = styled.div`
//   display: inline-flex;
//   gap: 8px;
//   margin-bottom: 26px;
// `;

export const CheckBoxContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 8px;

  margin-bottom: 26px;
`;
