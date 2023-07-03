import styled from 'styled-components';
import {
  COLORS,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
} from '../../theme';

export const HomeStyled = styled.div`
  padding-bottom: 56px;
`;

export const HomeExplore = styled.section`
  margin-bottom: 40px;
  padding-bottom: 40px;

  background-color: ${COLORS.white};
`;

export const HomeExploreWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1320px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  margin-bottom: 40px;

  font-size: ${FONT_SIZES.s40};
  font-weight: ${FONT_WEIGHTS.bold};
  line-height: ${LINE_HEIGHTS.h48};
  text-align: center;
  color: ${COLORS.black};
`;

export const HomeContent = styled.section`
  display: flex;
  gap: 24px;
  max-width: 1320px;
  margin: 0 auto;
`;
