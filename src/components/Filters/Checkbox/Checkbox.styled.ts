import styled from 'styled-components';
import { COLORS } from '../../../theme';

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  cursor: pointer;
`;

export const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const CheckboxCustom = styled.span<{ checked: boolean }>`
  width: 24px;
  height: 24px;
  padding: 4px 2px;
  border: 1px solid ${COLORS.grey};
  border-radius: 4px;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ checked }) =>
    checked ? `${COLORS.main}` : 'transparent'};
`;

export const CheckboxLabel = styled.span`
  font-size: 18px;
  color: ${COLORS.black};
`;
