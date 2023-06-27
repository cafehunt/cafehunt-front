import styled from 'styled-components';
import { COLORS, MEDIA } from '../../theme';

export const HeaderStyled = styled.header`
  width: 100%;
  padding: 48px 0;

  background-color: ${COLORS.white};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1320px;
  width: 100%;
  margin: 0 auto;

  @media (min-width: ${MEDIA.tablets}) {
    margin: 0 auto;
  }
`;
