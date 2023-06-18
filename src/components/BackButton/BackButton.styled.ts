import styled from 'styled-components';
import { COLORS } from '../../theme';

export const BackButtonStyled = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;

  font: inherit;
  text-decoration: none;
  color: ${COLORS.black};

  svg {
    font-size: 20px;
  }
`;
