import styled, { css } from 'styled-components';
import { COLORS, FONT_SIZES, LINE_HEIGHTS } from '../../theme';

enum LocationVariants {
  small = 'small',
  regular = 'regular',
  big = 'big',
}

type Props = {
  variant?: string;
  color?: string;
};

const smallLocationStyles = css`
  gap: 4px;

  font-size: ${FONT_SIZES.s14};
`;

const regularLocationStyles = css`
  gap: 8px;

  font-size: ${FONT_SIZES.s18};
`;

const bigLocationStyles = css`
  gap: 8px;

  font-size: ${FONT_SIZES.s24};
`;

export const Location = styled.a<Props>`
  display: inline-flex;
  align-items: center;

  line-height: ${LINE_HEIGHTS.h140};
  color: ${({ color }) => color || COLORS.main};
  text-decoration: none;

  ${({ variant }) => variant === LocationVariants.small && smallLocationStyles};

  ${({ variant }) =>
    (variant === LocationVariants.regular || !variant) &&
    regularLocationStyles};

  ${({ variant }) => variant === LocationVariants.big && bigLocationStyles};
`;
