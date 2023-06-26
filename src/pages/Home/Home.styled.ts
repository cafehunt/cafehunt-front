import styled from 'styled-components';
import {
  COLORS,
  MEDIA,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
} from '../../theme';

export const HomeStyled = styled.div`
  padding-bottom: 56px;
`;

export const HomeHeader = styled.header`
  padding: 48px 0;

  background-color: ${COLORS.white};
`;

export const HomeHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1320px;
  width: 100%;
  margin: 0 auto;

  @media (min-width: ${MEDIA.tablets}) {
    margin: 0 auto;
  }
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

export const ExploreList = styled.div`
  display: grid;
  gap: 24px;

  grid-template-columns: repeat(2, 1fr);

  @media (min-width: ${MEDIA.ultraDesktops}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const HomeContent = styled.section`
  display: flex;
  gap: 24px;
  max-width: 1320px;
  margin: 0 auto;
`;

export const CafeResults = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 28px;
`;
