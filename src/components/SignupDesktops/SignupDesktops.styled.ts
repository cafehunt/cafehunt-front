import styled from 'styled-components';

import { FONT_SIZES, FONT_WEIGHTS, LINE_HEIGHTS } from '../../theme';
import { COLORS } from '../../theme';

import loginBg from '../../assets/img/login-bg.jpg';

export const SignupStyled = styled.div`
  display: flex;
  gap: 90px;
  padding: 40px 0 40px 60px;
`;

export const SignupContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 428px;
  margin: 0 0 0 auto;
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

export const ResetPassword = styled.a`
  font: inherit;
  font-weight: ${FONT_WEIGHTS.medium};
  text-decoration: none;
  color: ${COLORS.main};
`;

export const SignupImage = styled.div`
  flex: 1;
  max-width: 850px;
  min-height: 700px;
  height: 80vh;

  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;

  background-image: url(${loginBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left center;
`;
