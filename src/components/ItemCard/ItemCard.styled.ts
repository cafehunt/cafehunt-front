import styled from 'styled-components';
import { COLORS, FONT_SIZES, FONT_WEIGHTS, LINE_HEIGHTS } from '../../theme';

export const ItemCardStyled = styled.article`
  display: flex;
  max-width: 872px;

  border-radius: 24px;
  background-color: ${COLORS.white};
  overflow: hidden;
`;

export const ItemCardPhoto = styled.div`
  width: 280px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ItemCardContent = styled.div`
  flex: 1;
  padding: 20px 24px;
`;

export const ItemCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ItemCardDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 48px;
`;

export const ItemCardTitle = styled.h3`
  margin-bottom: 10px;

  font-size: ${FONT_SIZES.s24};
  font-weight: ${FONT_WEIGHTS.medium};
  line-height: ${LINE_HEIGHTS.h34};
`;

export const ItemCardFavorite = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;

  font-size: ${FONT_SIZES.s24};

  cursor: pointer;
`;

export const ItemCardFeaturesList = styled.div`
  display: flex;
  gap: 8px;
`;

export const ItemCardFeatureItem = styled.p`
  padding: 4px 8px;
  color: ${COLORS.main};

  border-radius: 4px;
  background-color: ${COLORS.light_grey};
`;

export const ItemCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ItemCardRating = styled.p`
  display: flex;
  align-items: center;

  font-size: ${FONT_SIZES.s16};
  font-weight: ${FONT_WEIGHTS.regular};
  line-height: ${LINE_HEIGHTS.h20};
`;

export const RatingIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 6px;

  font-size: ${FONT_SIZES.s24};
  color: ${COLORS.orange};
`;
