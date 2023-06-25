import styled from 'styled-components';
import { COLORS, FONT_SIZES } from '../../../theme';

export const CustomSelectWrapper = styled.div`
  position: relative;
`;

export const SelectButton = styled.button<{ hasSelection: boolean }>`
  padding: 12px;
  border: 1px solid ${COLORS.grey};
  border-radius: 8px;
  background-color: ${COLORS.white};
  color: ${({ hasSelection }) =>
    hasSelection ? COLORS.black : COLORS.mid_grey};
  font-size: ${FONT_SIZES.s16};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 26px;
  cursor: pointer;

  &:focus {
    border-color: ${COLORS.main};
  }
`;

export const DropdownIcon = styled.img<{ isOpen: boolean }>`
  width: 24px;
  height: 24px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  transition: transform 0.3s ease-in-out;
`;

export const Options = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  top: 110%;
  left: 0;
  width: 100%;
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.grey};
  border-radius: 8px;
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  z-index: 1;
`;

export const Option = styled.li`
  padding: 8px;

  &:hover {
    background-color: ${COLORS.light_green};
    color: ${COLORS.main};
  }
`;

export const StyledLabel = styled.label`
  display: block;
  font-size: ${FONT_SIZES.s16};
  color: ${COLORS.dark_grey};
  line-height: 140%;
  margin-bottom: 6px;
`;
