import styled from 'styled-components';
import {
  COLORS,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  MEDIA,
} from '../../theme';

import cafeBg from '../../assets/img/login-bg.jpg';

export const CafeStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 64px;
  max-width: 1320px;
  margin: 0 auto;
  padding: 40px 20px;

  background-color: ${COLORS.white};

  @media (min-width: ${MEDIA.tablets}) {
    padding: 40px 60px;
  }
`;

export const CafeHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const CafeTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 258px 24px 24px;

  border-radius: 24px;

  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${cafeBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const CafeTitle = styled.h2`
  font-size: ${FONT_SIZES.s56};
  font-weight: ${FONT_WEIGHTS.bold};
  line-height: ${LINE_HEIGHTS.h120};
  color: ${COLORS.white};
`;

export const Favorite = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;

  font-size: ${FONT_SIZES.s24};

  border: none;
  border-radius: 50%;
  background-color: ${COLORS.white};

  cursor: pointer;
`;
