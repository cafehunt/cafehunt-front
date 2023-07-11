import styled from 'styled-components';
import { COLORS } from '../../theme';

export const BackButtonStyled = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;

  font: inherit;
  text-decoration: none;
  color: ${COLORS.black};

  cursor: pointer;

  svg {
    font-size: 20px;
  }
`;
