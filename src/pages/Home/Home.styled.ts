import styled from 'styled-components';
import { COLORS, MEDIA } from '../../theme';

export const HomeStyled = styled.div`
  padding: 40px 0;

  background-color: ${COLORS.white};
`;

export const HomeHeader = styled.header``;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  @media (min-width: ${MEDIA.tablets}) {
    padding: 0 60px;
  }
`;
