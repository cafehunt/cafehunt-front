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
  height: 150px;
  position: relative;

  border-radius: 16px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ItemFavorite = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;

  font-size: ${FONT_SIZES.s14};

  border: none;
  border-radius: 50%;
  outline: none;

  background-color: ${COLORS.white};

  cursor: pointer;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  color: ${COLORS.black};

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ItemTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ItemTitle = styled.h3`
  font-size: ${FONT_SIZES.s18};
  font-weight: ${FONT_WEIGHTS.medium};
  line-height: ${LINE_HEIGHTS.h34};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ItemRating = styled.p`
  display: flex;
  align-items: center;

  font-size: ${FONT_SIZES.s14};
  font-weight: ${FONT_WEIGHTS.regular};
  line-height: ${LINE_HEIGHTS.h20};
`;

export const RatingIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 6px;

  color: ${COLORS.orange};

  svg {
    font-size: 14px;
  }
`;
