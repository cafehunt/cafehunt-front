import styled from 'styled-components';
import { COLORS } from '../../theme';

export const InputStyled = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  span {
    color: ${COLORS.dark_grey};
  }
`;

export const InputContainer = styled.div`
  position: relative;
  display: block;

  input {
    width: 100%;
    padding: 12px 38px 12px 12px;

    border: 1px solid ${COLORS.grey};
    border-radius: 8px;

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
