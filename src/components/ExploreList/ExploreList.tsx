import { FC } from 'react';
import { useExploreNew } from '../../hooks/useExploreNew';
import { StyledExploreList } from './ExploreList.styled';
import { ItemCardSmall } from '../ItemCardSmall';

export const ExploreList: FC = () => {
  const [data, status] = useExploreNew();

  if (status === 'loading') {
    return <div>loading</div>
  }

  return (
    <StyledExploreList>
      {data?.map((cafe) => (
        <ItemCardSmall key={cafe.id} cafe={cafe} />
      ))}
    </StyledExploreList>
  );
};
