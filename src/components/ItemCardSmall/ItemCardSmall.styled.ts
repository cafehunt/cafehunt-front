import styled from 'styled-components';
import { COLORS, FONT_SIZES, FONT_WEIGHTS, LINE_HEIGHTS } from '../../theme';

export const ItemCardSmallStyled = styled.article`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 100%;
  max-width: 312px;
`;

export const ItemPhoto = styled.div`
  img {
    width: 100%;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  color: ${COLORS.black};
`;

export const ItemTitle = styled.h3`
  font-size: ${FONT_SIZES.s24};
  font-weight: ${FONT_WEIGHTS.medium};
  line-height: ${LINE_HEIGHTS.h34};
`;

export const ItemRating = styled.p`
  display: flex;
  align-items: center;

  font-size: ${FONT_SIZES.s14};
  font-weight: ${FONT_WEIGHTS.regular};
  line-height: ${LINE_HEIGHTS.h20};
`;

export const RatingIcon = styled.span`
  color: ${COLORS.orange};
  svg {
    font-size: 14px;
  }
`;

export const RatingNumber = styled.span``;
