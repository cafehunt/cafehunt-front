import styled from 'styled-components';
import {
  COLORS,
  MEDIA,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
} from '../../theme';

export const HomeStyled = styled.div`
  padding: 40px 20px;

  background-color: ${COLORS.white};

  @media (min-width: ${MEDIA.tablets}) {
    padding: 40px 60px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1320px;
  margin: 0 auto;
`;

export const HomeHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1320px;
  margin: 0 auto;

  @media (min-width: ${MEDIA.tablets}) {
    margin: 0 auto 48px;
  }
`;

export const HomeExplore = styled.section`
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

  @media (min-width: ${MEDIA.desktops}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${MEDIA.ultraDesktops}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
