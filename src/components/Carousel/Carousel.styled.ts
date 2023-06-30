import styled from 'styled-components';
import { COLORS } from '../../theme';

type Props = {
  active: boolean;
};

export const CarouselStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  user-select: none;
`;

export const Slide = styled.div<Props>`
  display: ${({ active }) => (active ? 'block' : 'none')};
  width: 100%;
  height: 100%;
  aspect-ratio: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ArrowLeft = styled.p`
  position: absolute;
  left: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;

  color: ${COLORS.white};

  border-radius: 50%;
  background: rgba(111, 121, 129, 0.5);

  cursor: pointer;
`;

export const ArrowRight = styled.p`
  position: absolute;
  right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;

  color: ${COLORS.white};

  border-radius: 50%;
  background: rgba(111, 121, 129, 0.5);

  cursor: pointer;
`;

export const Indicators = styled.div`
  position: absolute;
  bottom: 24px;
  display: flex;
  gap: 8px;
`;

export const Indicator = styled.button<Props>`
  display: flex;
  gap: 8px;
  width: 8px;
  height: 8px;
  padding: 0;

  border: none;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? COLORS.white : COLORS.grey)};
  outline: none;

  cursor: pointer;
`;
