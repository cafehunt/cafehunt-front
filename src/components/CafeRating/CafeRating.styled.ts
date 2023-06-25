import styled from 'styled-components';
import { FONT_SIZES, COLORS } from '../../theme';

export const CafeRatingStyled = styled.p``;

export const RatingIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${FONT_SIZES.s24};
  color: ${COLORS.orange};
`;

export const RatingAmount = styled.span`
  font-size: ${FONT_SIZES.s18};
`;

export const RatingReviews = styled.span`
  font-size: ${FONT_SIZES.s16};
  color: ${COLORS.mid_grey};
`;
