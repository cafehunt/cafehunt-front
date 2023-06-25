import styled from 'styled-components';
import { COLORS, FONT_SIZES } from '../../../theme';

export const InputContainer = styled.div`
  position: relative;
`;

export const StyledInput = styled.input`
  padding: 12px;
  border: 1px solid ${COLORS.grey};
  border-radius: 8px;
  background-color: ${COLORS.white};
  color: ${COLORS.black};
  font-size: ${FONT_SIZES.s16};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 26px;
  cursor: pointer;

  &::placeholder {
    color: ${COLORS.mid_grey};
  }

  &:focus {
    border-color: ${COLORS.main};
    outline: none;
  }
`;

export const StyledLabel = styled.label`
  display: block;
  font-size: ${FONT_SIZES.s16};
  color: ${COLORS.dark_grey};
  line-height: 140%;
  margin-bottom: 6px;
`;

export const IconSearch = styled.img`
  position: absolute;
  top: 50%;
  right: 12px;
  width: 24px;
  height: 24px;
`;
