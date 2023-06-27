import styled from 'styled-components';
import { COLORS, FONT_SIZES } from '../../theme';

export const CafeTag = styled.p`
  padding: 4px 8px;

  font-size: ${FONT_SIZES.s18};
  color: ${COLORS.main};

  border-radius: 4px;
  background-color: ${COLORS.light_grey};
`;
