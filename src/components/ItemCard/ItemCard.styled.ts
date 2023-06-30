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
  aspect-ratio: 1;
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
  flex-wrap: wrap;
  gap: 8px;
`;

export const ItemCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;
