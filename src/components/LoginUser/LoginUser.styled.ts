import styled from 'styled-components';
import { COLORS, FONT_SIZES } from '../../theme';

export const LiginUserStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const LoginUserIcon = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${FONT_SIZES.s32};
  color: ${COLORS.black};
`;

export const LoginUserName = styled.p`
  font-size: ${FONT_SIZES.s18};
  color: ${COLORS.black};
`;
