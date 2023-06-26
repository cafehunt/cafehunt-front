import styled from 'styled-components';

type Props = {
  fd?: 'row' | 'column';
  jc?: 'flex-start' | 'space-between' | 'space-around' | 'center';
  ai?: 'flex-start' | 'center' | 'flex-end';
  gap?: string;
  width?: string;
  height?: string;
};

export const FlexContainer = styled.div<Props>`
  display: flex;
  flex-direction: ${({ fd }) => fd || 'row'};
  justify-content: ${({ jc }) => jc || 'flex-start'};
  align-items: ${({ ai }) => ai || 'flex-start'};
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};

  gap: ${({ gap }) => gap || '0px'};
`;
