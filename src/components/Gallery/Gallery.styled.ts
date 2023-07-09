import styled from 'styled-components';
import { COLORS } from '../../theme';

export const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 5;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainImage = styled.img`
  width: 715px;
  height: 450px;
  border-radius: 10px;
  object-fit: cover;
  margin-bottom: 24px;
  user-select: none;
`;

export const Amount = styled.span`
  margin-bottom: 24px;
  color: white;
`;

export const PhotosContainer = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Photo = styled.img`
  width: 176px;
  height: 111px;
  object-fit: cover;
  border-radius: 10px;
  transition: all 300ms;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
  }
`;

export const Section = styled.div`
  position: relative;
`;

export const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: -50px;
  transform: translateY(-50%);
  z-index: 7;
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
    color: ${COLORS.white};
  }
`;

export const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: -50px;
  width: 36px;
  transform: translateY(-50%);
  height: 36px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
    color: ${COLORS.white};
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 24px;
  transform: translateY(-50%);
  height: 24px;
  z-index: 6;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;

  svg {
    width: 100%;
    height: 100%;
    color: ${COLORS.white};
  }
`;
