import styled from 'styled-components';
import { COLORS, FONT_SIZES } from '../../theme';

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${COLORS.light_green};
`;

export const NotFoundImage = styled.img`
  width: 300px;
  height: auto;
  margin-bottom: 40px;
`;

export const NotFoundTitle = styled.h1`
  font-size: ${FONT_SIZES.s40};
  margin-bottom: 20px;
`;

export const NotFoundText = styled.p`
  font-size: ${FONT_SIZES.s18};
  color: ${COLORS.black};
  text-align: center;
  margin-bottom: 20px;
`;
