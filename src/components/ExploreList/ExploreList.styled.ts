import styled from 'styled-components';
import { MEDIA } from '../../theme';

export const StyledExploreList = styled.div`
  display: grid;
  gap: 24px;

  grid-template-columns: repeat(2, 1fr);

  @media (min-width: ${MEDIA.ultraDesktops}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
