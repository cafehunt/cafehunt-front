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

export const CafeGallery = styled.div``;

export const CafeTitleSecondary = styled.h3`
  margin-bottom: 20px;

  font-size: ${FONT_SIZES.s32};
  font-weight: ${FONT_WEIGHTS.bold};
  line-height: ${LINE_HEIGHTS.h120};
  color: ${COLORS.black};
`;

export const CafeGalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 24px;
`;

export const PhotoContainer = styled.div`
  grid-column: span 1;
  grid-row: span 1;

  border-radius: 16px;
  overflow: hidden;

  &:nth-child(1) {
    grid-row: span 2;
  }

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;

export const CafeInfo = styled.div`
  display: flex;
  gap: 24px;
`;

export const CafeInfoItem = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;
  padding: 24px;

  font-size: ${FONT_SIZES.s18};

  border: 1px solid ${COLORS.grey};
  border-radius: 16px;
  background-color: ${COLORS.white};

  &:nth-child(2) {
    color: ${COLORS.white};

    border: none;
    background-color: ${COLORS.main};
  }
`;

export const CafeTitleTertiary = styled.h4`
  font-size: ${FONT_SIZES.s24};
  font-weight: ${FONT_WEIGHTS.medium};
  line-height: ${LINE_HEIGHTS.h140};
`;

export const CafePhone = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  svg {
    font-size: ${FONT_SIZES.s20};
  }
`;

export const CafePhoneNumber = styled.p`
  font-size: ${FONT_SIZES.s18};
  line-height: ${LINE_HEIGHTS.h140};
`;

export const CafeInfoLink = styled.a`
  font-size: ${FONT_SIZES.s16};
  font-weight: ${FONT_WEIGHTS.medium};
  line-height: ${LINE_HEIGHTS.h140};
  text-decoration: underline;
  color: ${COLORS.main};

  cursor: pointer;
`;

export const CafeInfoReviews = styled.span`
  font-size: ${FONT_SIZES.s18};
`;

export const CafeInfoRating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    font-size: ${FONT_SIZES.s56};
    color: ${COLORS.orange};
  }

  span {
    font-size: ${FONT_SIZES.s72};
    font-weight: ${FONT_WEIGHTS.medium};
  }
`;
