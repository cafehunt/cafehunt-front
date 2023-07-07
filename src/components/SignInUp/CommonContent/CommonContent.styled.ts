import styled from 'styled-components';

import { FONT_SIZES, FONT_WEIGHTS, LINE_HEIGHTS, COLORS } from '../../../theme';

import loginBg from '../../../assets/img/login-bg.jpg';

export const ContentDesktopsStyled = styled.div`
  display: flex;
  gap: 200px;
  height: 90vh;
  padding: 5vh 0 5vh 200px;
`;

export const ContentPhonesStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 424px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 428px;
`;

export const Title = styled.h2`
  margin-bottom: 16px;

  font-size: ${FONT_SIZES.s40};
  font-weight: ${FONT_WEIGHTS.bold};
  line-height: ${LINE_HEIGHTS.h48};
  color: ${COLORS.black};
`;

export const LinkStyled = styled.span`
  font: inherit;
  font-weight: ${FONT_WEIGHTS.medium};
  text-decoration: none;
  color: ${COLORS.main};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 30px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ResetPassword = styled.a`
  font: inherit;
  font-weight: ${FONT_WEIGHTS.medium};
  text-decoration: none;
  color: ${COLORS.main};
`;

export const ContentImage = styled.div`
  flex: 1;
  height: 90vh;

  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;

  background-image: url(${loginBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left center;
`;

export const StyledError = styled.p`
  color: red;
  font-size: 13px;
`;
