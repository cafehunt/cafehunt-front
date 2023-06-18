import styled from 'styled-components';

import { FONT_SIZES, FONT_WEIGHTS, LINE_HEIGHTS } from '../../theme';
import { COLORS } from '../../theme';

export const SignupStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 424px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Title = styled.h2`
  margin-bottom: 16px;

  font-size: ${FONT_SIZES.l};
  font-weight: ${FONT_WEIGHTS.bold};
  line-height: ${LINE_HEIGHTS.l};
  color: ${COLORS.black};
`;

export const Link = styled.a`
  font: inherit;
  font-weight: ${FONT_WEIGHTS.medium};
  text-decoration: none;
  color: ${COLORS.main};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
