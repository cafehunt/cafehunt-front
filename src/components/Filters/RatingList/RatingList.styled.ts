import styled from 'styled-components';
import { FONT_SIZES, FONT_WEIGHTS, COLORS } from '../../../theme';

export const RatingListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-bottom: 26px;
`;

export const RatingListTitle = styled.h3`
  font-size: 18px;
  font-weight: ${FONT_WEIGHTS.medium};
  line-height: 140%;
`;

export const RatingListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const RatingListItem = styled.p`
  display: flex;
  gap: 8px;
  align-items: center;

  cursor: pointer;
`;

export const RatingInput = styled.input`
  appearance: none;
  position: relative;
  margin: 0;
  width: 24px;
  height: 24px;
  border: 1px solid ${COLORS.grey};
  border-radius: 50%;

  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 14px;
    height: 14px;

    background-color: transparent;
    border-radius: 50%;

    transition: background-color 0.3s ease;
  }

  &:checked {
    border-color: ${COLORS.main};

    &::after {
      background-color: ${COLORS.main};
    }
  }
`;

export const RatingLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${FONT_SIZES.s24};

  cursor: pointer;

  svg {
    fill: ${COLORS.orange};
  }
`;
