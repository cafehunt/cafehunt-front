import styled, { css } from 'styled-components';
import { FONT_SIZES, LINE_HEIGHTS } from '../../theme';

enum ScheduleVariants {
  small = 'small',
  regular = 'regular',
  big = 'big',
}

type Props = {
  variant?: string;
};

const smallScheduleStyles = css`
  font-size: ${FONT_SIZES.s14};
`;

const regularScheduleStyles = css`
  font-size: ${FONT_SIZES.s16};
`;

const bigScheduleStyles = css`
  font-size: ${FONT_SIZES.s24};
`;

export const Schedule = styled.p<Props>`
  padding-left: 6px;

  line-height: ${LINE_HEIGHTS.h22};

  ${({ variant }) => variant === ScheduleVariants.small && smallScheduleStyles};

  ${({ variant }) =>
    (variant === ScheduleVariants.regular || !variant) &&
    regularScheduleStyles};

  ${({ variant }) => variant === ScheduleVariants.big && bigScheduleStyles};
`;
