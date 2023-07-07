import styled from 'styled-components';
import { COLORS } from '../../theme';

type Props = {
  hasError?: boolean;
};

export const InputStyled = styled.label`
  /* display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1; */
  display: block;

  span {
    display: inline-block;
    margin-bottom: 8px;

    color: ${COLORS.dark_grey};
  }
`;

export const InputContainer = styled.div<Props>`
  position: relative;
  display: block;

  input {
    width: 100%;
    padding: 12px 38px 12px 12px;

    color: ${({ hasError }) => (hasError ? COLORS.red : COLORS.black)};

    border: 1px solid ${({ hasError }) => (hasError ? COLORS.red : COLORS.grey)};
    border-radius: 8px;
    background-color: ${({ hasError }) =>
      hasError ? COLORS.light_red : COLORS.white};

    outline: none;

    &::placeholder {
      color: ${COLORS.mid_grey};
    }

    &:focus {
      border-color: ${COLORS.main};
    }
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);

  font-size: 26px;
  color: ${COLORS.black};

  cursor: pointer;
`;

export const StyledError = styled.p`
  padding-left: 12px;

  font-size: 13px;
  color: red;
`;
