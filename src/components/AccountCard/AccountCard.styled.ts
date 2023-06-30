import styled from 'styled-components';
import { AiFillHeart } from 'react-icons/ai';
import { COLORS, FONT_SIZES, FONT_WEIGHTS, LINE_HEIGHTS } from '../../theme';

export const ItemCardStyled = styled.article`
  display: flex;
  flex: 1;
  max-width: 1320px;
  border: 1px solid ${COLORS.grey};
  border-radius: 24px;
  background-color: ${COLORS.white};
  overflow: hidden;
`;

export const BookingStyled = styled.div`
  display: flex;
  flex:1;
  flex-direction: column;
  max-width: 403px;
  border: 1px solid ${COLORS.grey};
  border-radius: 24px;
  background-color: ${COLORS.white};
  overflow: hidden;
  padding: 12px;
`

export const StyledSubtitle = styled.h3`
  font-size: ${FONT_SIZES.s18};
  color: ${COLORS.black};
  line-height: 140%;
`

export const SubtitleWrapper = styled.div`
  margin-bottom: 34px;
`

export const ItemCardPhoto = styled.div`
  width: 280px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 24px;
  }
`;

export const ItemCardContent = styled.div`
  flex: 1;
  padding: 12px 24px;
`;

export const ItemCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ItemCardDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 30px;
`;

export const ItemCardTitle = styled.h3`
  margin-bottom: 8px;

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

export const RedHeartIcon = styled(AiFillHeart)`
  color: red;
`;