import styled from 'styled-components';
import { COLORS } from '../../theme';

type Props = {
  disabled?: boolean;
};

export const Button = styled.button<Props>`
  padding: 12px 0;

  color: ${COLORS.white};

  border: 1px solid transparent;
  border-radius: 8px;
  background-color: ${COLORS.main};

  transition: 0.3s background-color ease;

  cursor: pointer;

  &:hover {
    background-color: ${COLORS.tertiary_color};
  }

  &:disabled {
    color: ${COLORS.mid_grey};
    background-color: ${COLORS.light_grey};
    cursor: not-allowed;
  }
`;
